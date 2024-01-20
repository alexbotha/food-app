import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";
import Image from "next/image";
import MealNotFound from "./meal-not-found";

export default function mealsSlug({ params }) {
  const meal = getMeal(params.slug);

  return meal ? (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"meal.creator_email"}`}>Name</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  ) : (
    <MealNotFound />
  );
}
