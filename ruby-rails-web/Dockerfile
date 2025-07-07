FROM ruby:3.2-slim

WORKDIR /app

# Install dependencies in single layer
RUN apt-get update -qq && apt-get install -y --no-install-recommends \
    build-essential libsqlite3-dev nodejs libyaml-dev \
    libffi-dev libssl-dev zlib1g-dev libreadline-dev && \
    rm -rf /var/lib/apt/lists/*

# Copy and install gems first for better caching
COPY Gemfile ./
RUN bundle install --jobs 4 --retry 3

# Copy application code
COPY . .

EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]