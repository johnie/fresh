import { createFileRoute } from "@tanstack/react-router";
import Counter from "~/components/counter";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <h1>About</h1>
      <Counter />
    </main>
  );
}
