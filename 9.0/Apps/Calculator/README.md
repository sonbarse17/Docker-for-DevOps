# Android Calculator App

A simple cross-platform calculator application built with .NET MAUI.

---

## 🛠️ Tech Stack

- **Framework:** [.NET MAUI](https://learn.microsoft.com/dotnet/maui/) (Multi-platform App UI)
- **Programming Languages:**  
  - C# (application logic, UI code)
  - XAML (UI layout)
- **Supported Platforms:**  
  - Android  
  - iOS  
  - Windows  
  - macOS  
  - Tizen

---

## 📁 Project Structure

- `App.xaml`, `MainPage.xaml`: UI definitions (XAML)
- `App.xaml.cs`, `MainPage.xaml.cs`, `Calculator.cs`: Application and logic (C#)
- `Platforms/`: Platform-specific code for Android, iOS, Windows, macOS, Tizen
- `Resources/`: Fonts, images, styles

---

## 🚀 Deployment Guide (Android)

### Prerequisites

- [Android Studio](https://developer.android.com/studio) or [Visual Studio 2022+](https://visualstudio.microsoft.com/vs/) with .NET MAUI workload
- Android device or emulator

### Steps

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd 9.0/Apps/Calculator/src/Calculator
   ```

2. **Open the project**
   - In Visual Studio: `File > Open > Project/Solution` and select `Calculator.sln`
   - In Android Studio: Open as a folder (for reference; main development is in Visual Studio)

3. **Build the project**
   - Select the `Android` target.
   - Click `Build > Build Solution` or press `Ctrl+Shift+B`.

4. **Run the app**
   - Connect your Android device (enable Developer Mode) or start an emulator.
   - Click the green "Run" button or select `Debug > Start Debugging`.

5. **Access the Calculator**
   - The app will launch on your device/emulator.

---

## 📦 Production Release (APK)

1. **Build APK**
   - In Visual Studio: `Build > Archive` (select Android)
   - Or use `dotnet publish -f:net8.0-android` from the command line

2. **Locate APK**
   - Find the APK in `bin/Release/net8.0-android/` or via the Visual Studio archive manager.

3. **Install APK**
   - Transfer the APK to your device and install it.

---

## 📄 License

See [LICENSE](LICENSE) for details.
