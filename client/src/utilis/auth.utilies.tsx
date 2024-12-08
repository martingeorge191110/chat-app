

/* Functions which return validation errors */
export const return_errors = (field: string, data: any) => {
   if (!data?.payload.errors || data.payload.errors.length === 0)
      return ("")

   const index = data?.payload.errors.findIndex((ele: { path?: string }) => ele.path === field)
   if (index === -1)
      return("")

   const element: {msg?: string} = data?.payload.errors[index]

   return (
      <p className="text-sm text-center text-red-600">
         {
            element.msg
         }
      </p>
   )
}