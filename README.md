<<<<<<< HEAD
# shop_sphere
=======
# ShopSphere

ShopSphere is a MERN marketplace foundation for independent sellers, customers, support agents, delivery partners, and platform admins.

## Run locally

1. Install Node.js 20+.
2. Copy `.env.example` to `server/.env` and set `MONGO_URI` and `JWT_SECRET`.
3. Run `npm install` in the root, then `npm install --prefix client` and `npm install --prefix server`.
4. Run `npm run dev` for the React storefront and Express API.
5. Open `http://localhost:5173`. The API health check is at `http://localhost:5000/api/health`.

The current vertical slice includes responsive marketplace discovery, category filtering, product search, cart interaction, seller CTA, and API product data. The server boundary is ready for the next modules: JWT role authorization, Mongoose models, multi-vendor checkout, inventory reservations, returns, settlements, moderation, support, and AI services.

## Deployment

Build the client with `npm run build`. Deploy the generated `client/dist` directory to a static host such as Vercel or Netlify, and deploy `server` to a Node host such as Render or Railway. Set `CLIENT_URL`, `MONGO_URI`, `JWT_SECRET`, and `PORT` in the server environment. MongoDB Atlas is recommended for production data.
>>>>>>> 2a83ab1 (Add complete ShopSphere marketplace)


render:https://shop-sphere-4.onrender.com
versel:https://shop-sphere-mocha-rho.vercel.app/
