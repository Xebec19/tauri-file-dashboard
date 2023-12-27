export default function Footer() {
  return (
    <div className="w-full py-2 px-4 container border-t-2">
      <p>&copy; {new Date().getFullYear()}</p>
    </div>
  );
}
