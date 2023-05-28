import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Plus } from "lucide-react";
import { db } from "@/db";
import { countries } from "@/db/schema";

export default async function page() {
	const allCountries = await db.select().from(countries);

	const firstCountry = allCountries[0].name;
	const secondCountry = allCountries[1].name;

	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
			<h1>{firstCountry}</h1>
			<h1>{secondCountry}</h1>
			<Button>Test</Button>
			<Button variant="destructive">Test</Button>
			<Button variant="outline">Test</Button>
			<Button variant="secondary">Test</Button>
			<Button variant="link">Test</Button>
			<Button variant="ghost">Test</Button>
			<TooltipProvider delayDuration={0}>
				<Tooltip>
					<TooltipTrigger asChild>
						<Plus className="h-4 w-4" />
					</TooltipTrigger>
					<TooltipContent>
						<p>Add to library</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
