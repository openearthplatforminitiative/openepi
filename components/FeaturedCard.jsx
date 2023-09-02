import { Card, CardBody, Typography } from "@material-tailwind/react";

function FeaturedCard(icon, title, children, description ) {
  return (
    <Card color="white" shadow={false}>
      <CardBody className="grid justify-start">
       
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className=" font-normal !text-gray-500">
          {children}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default FeaturedCard