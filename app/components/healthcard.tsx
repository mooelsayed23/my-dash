import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";

const Healthcard = ({ percentage = 70, text = "" }) => {
  const range =
    percentage <= 50
      ? "from-blue-500 to-blue-300"
      : percentage < 75
      ? "from-green-500 to-green-300"
      : percentage <= 85
      ? "from-yellow-500 to-yellow-300"
      : "from-red-500 to-red-300";

  return (
    <>
      <Card
        className={`w-[240px] h-[240px] shadow-lg border-none mb-5 mx-5 justify-center grow bg-gradient-to-br ${range}`}
      >
        <CardBody className="justify-center items-center pb-0">
          <CircularProgress
            classNames={{
              svg: "w-36 h-36 drop-shadow-md",
              indicator: "stroke-white",
              track: "stroke-white/10",
              value: "text-3xl font-semibold text-white",
            }}
            value={percentage}
            strokeWidth={4}
            showValueLabel={true}
          />
        </CardBody>
        <CardFooter className="justify-center items-center pt-0">
          <Chip
            classNames={{
              base: "border-1 border-white/30",
              content: "text-white/90 text-small font-semibold",
            }}
            variant="bordered"
          >
            {text}
          </Chip>
        </CardFooter>
      </Card>
    </>
  );
};

export default Healthcard;
