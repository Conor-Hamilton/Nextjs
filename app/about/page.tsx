import Hello from "../components/Hello";

export default function AboutPage() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of my Next.js app</p>
      <Hello name="Conor" />
      <Hello name="Next.js Learner" />
    </div>
  );
}
