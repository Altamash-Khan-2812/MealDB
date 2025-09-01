import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Simple, data-driven card
export default function RecipeCard({
  title,
  desc,
  img,
}) {
  return (
    <Card className="h-[400px] text-left rounded-2xl overflow-hidden shadow-md transition hover:shadow-lg group pt-0 duration-700 hover:-translate-y-2.5">
      <div className="relative h-48 w-full overflow-hidden mb-5">
        <div className="absolute inset-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] z-10 absolute"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl text-amber-900 font-semibold mb-4">{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-base text-amber-900 line-clamp-3 mb-5">{desc}</p>
      </CardContent>

      <CardFooter>
        <Button variant="secondary" className="rounded-2xl block lg:opacity-0 group-hover:opacity-100 text-amber-900 bg-amber-100 hover:bg-amber-100 hover:cursor-pointer">
          View Recipe →
        </Button>
      </CardFooter>
    </Card>
  );
}

