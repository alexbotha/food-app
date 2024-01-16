import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealItem from "@/components/meals/meal-item";

async function Meal() {
  const meals = await getMeals();

  return <MealItem meals={meals} />;
}

export default function Meals() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highligh}>by you</span>
        </h1>
        <p>Choose your favourite!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite here</Link>
        </p>
        <main className={classes.main}>
          <Suspense fallback={<p className={classes.loading}>Loading</p>}>
            <Meal />
          </Suspense>
        </main>
      </header>
    </>
  );
}
