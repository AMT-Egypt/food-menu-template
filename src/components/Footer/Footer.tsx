export default function Footer() {
  return (
    <div className="w-full py-4 flex justify-center items-center font-light bg-fourth text-primary">
      <p>
        Powered by{" "}
        <a
          href="https://amt-egypt.vercel.app"
          target="_blank"
          className="text-red-600 font-bold"
        >
          AMT
        </a>
      </p>
    </div>
  );
}
