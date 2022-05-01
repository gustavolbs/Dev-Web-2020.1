import { Container } from "./styles";
import Skeleton from "react-loading-skeleton";

const SkeletonCard: React.FC = () => {
  return (
    <>
      {Array(10)
        .fill(1)
        .map(() => (
          <Container>
            <Skeleton width={"40%"} height={28} enableAnimation />
            <Skeleton count={2} height={12} enableAnimation />
            <Skeleton width={"80%"} height={8} enableAnimation />
          </Container>
        ))}
    </>
  );
};
export default SkeletonCard;
