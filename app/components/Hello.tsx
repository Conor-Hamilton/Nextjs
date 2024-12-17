interface HelloProps {
    name: string;
}


export default function Home({ name }: HelloProps) {
  return <h2>Hello, {name}!</h2>;
}
