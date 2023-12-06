import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Offers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-2">
      <Card>
        <CardHeader>
          <CardTitle>AI engineer</CardTitle>
          <CardDescription>full-time/intern 🇩🇿</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="https://github.com/BIGmama-technology/Hiring-AI-engineer">
              Flex your muscles 💪🏽
            </Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Frontend developer</CardTitle>
          <CardDescription>full-time/intern 🇩🇿</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="https://github.com/BIGmama-technology/Hiring-AI-engineer">
              Show your talent ✨
            </Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Backend engineer</CardTitle>
          <CardDescription>full-time/intern 🇩🇿</CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="https://github.com/BIGmama-technology/Hiring-AI-engineer">
              Challange yourself 🚀
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
