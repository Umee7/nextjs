
const page = ({params} : {params: {user: string}}) => {
    const {user} = params;
  return (
    <div>
      <h1>User Details Page: </h1>
      <h1>Hello {user}</h1>
    </div>
  )
}

export default page
