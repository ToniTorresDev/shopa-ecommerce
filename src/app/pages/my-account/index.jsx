import DefaultLayout from "../../layouts/default"

function MyAccount() {
  return (
    <DefaultLayout>
      <div className="flex justify-center align-center">
        <h1 className="text-3xl font-bold underline bg-red-100">
          MyAccount page!
        </h1>
      </div>
    </DefaultLayout>
  )
}

export default MyAccount
