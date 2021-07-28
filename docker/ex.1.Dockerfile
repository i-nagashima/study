# ruby
FROM ruby:2.5

# components
RUN apt-get update \
    && apt-get install -y \
    build-essential \
    libpq-dev \
    nodejs \
    postgresql-client \
    yarn

# work /product-register
WORKDIR /product-register

# copy
COPY Gemfile Gemfile.lock /product-register/

# bundle install
RUN bundle install

