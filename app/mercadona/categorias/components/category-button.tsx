"use client"

import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

interface CategoryButtonProps {
  id?: number;
  subcategoria?: string;
  className?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  id,
  subcategoria,
  className
}) => {
  const router = useRouter();
  const pathname = usePathname();

  // Parse the pathname to get the last segment
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];

  // Check if the last segment is a number
  const isLastSegmentANumber = !isNaN(Number(lastSegment));

  // Build the new pathname
  const newPathname = isLastSegmentANumber
    ? segments.slice(0, segments.length - 1).join('/') + `/${id}`
    : `${pathname}/${id}`;

  const handleClick = () => {
    router.push(newPathname);
  };

  return (
    <Button
      variant="link"
      onClick={handleClick}
      className={`${className}`}
    >
      {subcategoria}
    </Button>
  );
};

export default CategoryButton;