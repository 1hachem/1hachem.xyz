import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <GitHubCalendar
      username="1hachem"
      colorScheme="dark"
      fontSize={12}
      style={{ paddingTop: 20 }}
      blockMargin={5}
    />
  );
}
