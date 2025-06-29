import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class Main {
    private static final int DEFAULT_PORT = 8000;
    private static final String QUOTES_FILE = "quotes.txt";
    private static final Random random = ThreadLocalRandom.current();
    
    private final List<String> quotes;
    
    public Main(List<String> quotes) {
        this.quotes = List.copyOf(quotes);
    }
    
    public static void main(String[] args) {
        try {
            int port = getPortFromArgs(args);
            List<String> quotes = loadQuotes(QUOTES_FILE);
            
            if (quotes.isEmpty()) {
                System.err.println("No quotes found. Ensure '" + QUOTES_FILE + "' exists and has content.");
                System.exit(1);
            }
            
            new Main(quotes).startServer(port);
        } catch (Exception e) {
            System.err.println("Failed to start server: " + e.getMessage());
            System.exit(1);
        }
    }
    
    private void startServer(int port) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        server.createContext("/", this::handleUIRequest);
        server.createContext("/api/quote", this::handleApiRequest);
        server.start();
        
        System.out.println("Server running on port " + port + " with " + quotes.size() + " quotes");
        System.out.println("UI: http://localhost:" + port);
        System.out.println("API: http://localhost:" + port + "/api/quote");
        
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            System.out.println("\nShutting down server...");
            server.stop(0);
        }));
    }
    
    private void handleUIRequest(HttpExchange exchange) throws IOException {
        try {
            String html = createHtmlPage();
            sendHtmlResponse(exchange, html, 200);
        } catch (Exception e) {
            System.err.println("Error handling UI request: " + e.getMessage());
            sendHtmlResponse(exchange, "<h1>Error loading page</h1>", 500);
        }
    }
    
    private void handleApiRequest(HttpExchange exchange) throws IOException {
        try {
            String quote = getRandomQuote();
            String response = createJsonResponse(quote);
            sendJsonResponse(exchange, response, 200);
        } catch (Exception e) {
            System.err.println("Error handling API request: " + e.getMessage());
            sendJsonResponse(exchange, "{\"error\":\"Internal server error\"}", 500);
        }
    }
    
    private String getRandomQuote() {
        return quotes.get(random.nextInt(quotes.size()));
    }
    
    private String createJsonResponse(String quote) {
        return String.format("{\"quote\":\"%s\"}", escapeJson(quote));
    }
    
    private String escapeJson(String text) {
        return text.replace("\\", "\\\\")
                  .replace("\"", "\\\"")
                  .replace("\n", "\\n")
                  .replace("\r", "\\r")
                  .replace("\t", "\\t");
    }
    
    private String createHtmlPage() {
        return "<!DOCTYPE html><html><head><title>Random Quotes</title><style>" +
               "body{font-family:Arial,sans-serif;max-width:600px;margin:50px auto;padding:20px;text-align:center}" +
               "#quote{font-size:24px;font-style:italic;margin:30px 0;padding:20px;border-left:4px solid #007acc;background:#f9f9f9}" +
               "button{font-size:18px;padding:10px 20px;background:#007acc;color:white;border:none;border-radius:5px;cursor:pointer}" +
               "button:hover{background:#005a99}</style></head><body>" +
               "<h1>Random Quotes Generator</h1>" +
               "<div id='quote'>Click the button to get a random quote!</div>" +
               "<button onclick='getQuote()'>Get New Quote</button>" +
               "<script>async function getQuote(){try{const r=await fetch('/api/quote');const d=await r.json();" +
               "document.getElementById('quote').textContent=d.quote}catch(e){" +
               "document.getElementById('quote').textContent='Error loading quote'}}</script></body></html>";
    }
    
    private void sendJsonResponse(HttpExchange exchange, String response, int statusCode) throws IOException {
        byte[] responseBytes = response.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json");
        exchange.sendResponseHeaders(statusCode, responseBytes.length);
        
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(responseBytes);
        }
    }
    
    private void sendHtmlResponse(HttpExchange exchange, String response, int statusCode) throws IOException {
        byte[] responseBytes = response.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "text/html");
        exchange.sendResponseHeaders(statusCode, responseBytes.length);
        
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(responseBytes);
        }
    }
    
    private static List<String> loadQuotes(String filename) throws IOException {
        Path path = Paths.get(filename);
        if (!Files.exists(path)) {
            throw new IOException("Quotes file not found: " + filename);
        }
        
        return Files.readAllLines(path, StandardCharsets.UTF_8)
                   .stream()
                   .map(String::trim)
                   .filter(line -> !line.isEmpty())
                   .toList();
    }
    
    private static int getPortFromArgs(String[] args) {
        if (args.length > 0) {
            try {
                int port = Integer.parseInt(args[0]);
                if (port < 1 || port > 65535) {
                    throw new IllegalArgumentException("Port must be between 1 and 65535");
                }
                return port;
            } catch (NumberFormatException e) {
                System.err.println("Invalid port number: " + args[0] + ". Using default port " + DEFAULT_PORT);
            }
        }
        return DEFAULT_PORT;
    }
}

