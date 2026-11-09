export default function Header({ username }) {
  console.log("Header username: ", username);
  return <div>Logged in as: {username || "Guest"}</div>;
}
