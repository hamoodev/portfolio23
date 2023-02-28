import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from '~/tailwind.css'

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Mohammed Balfaqih",
  viewport: "width=device-width,initial-scale=1",
});
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet},
  { rel: 'stylesheet', href: "https://kit.fontawesome.com/aeb6e7a7c3.css", crossOrigin: "anonymous"},
  { rel: "preconnect", href: "https://fonts.googleapis.com"},
  { rel: "preconnect", href: "https://fonts.gstatic.com"},
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"},
  { rel: "icon", href:"/favicon.svg"}
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://kit.fontawesome.com/aeb6e7a7c3.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
