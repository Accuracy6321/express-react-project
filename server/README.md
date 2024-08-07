# Cozy Threads Backend

This is the backend server for the Cozy Threads e-commerce application, built with Node.js, Express, and Sequelize. It handles product management, user authentication, and Stripe payments.

## Prerequisites
You can leverage the docker-compose setup for this or run it locally on your machine

- PostgreSQL

## Installation & Running Project

1. Clone the repository:

```bash
git clone https://github.com/your-repo/cozy-threads.git
cd cozy-threads/server
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file based on the .env.dist template:

```bash
cp .env.dist .env
```

4. Update the .env file with your configuration:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_NAME=cozy_threads_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
STRIPE_SECRET_KEY=your_stripe_secret_key
```

5. Manually run the seeder to add data to the db:

```bash
node server/seed/add-products.js
```

6. To start the development server, run:

```bash
npm run dev
```