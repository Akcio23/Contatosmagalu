import Link from "next/link";
import ButtonAddContato from "../components/ButtonAddContato";
import Contacts from "../components/Contacts";
import Image from "next/image";



//Mocando dados de contatos
const contacts = [{
  email: "pedroacacio@gmail.com",
  departament: "labs",
  position: "Liberar Saldo",
  number: "(16)99285-7699",
  _id: "1"
},
{
  email: "pedroacacio@gmail.com",
  departament: "labs",
  position: "Liberar Saldo",
  number: "",
  _id: "2"
},
{
  email: "pedroacacio@gmail.com",
  departament: "labs",
  position: "Liberar Saldo",
  number: "(16)99285-7699",
  _id: "3"
}, {
  email: "pedroacacio@gmail.com",
  departament: "labs",
  position: "Liberar Saldo",
  number: "(16)99285-7699",
  _id: "4"
},
{
  email: "pedroacacio@gmail.com",
  departament: "labs",
  position: "Liberar Saldo",
  number: "(16)99285-7699",
  _id: "5"
},
{
  email: "pedroacacio@gmail.com",
  departament: "labs",
  position: "Liberar Saldo",
  number: "",
  _id: "6"
}]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-white">


      <div className="fixed top-0 bg-blue-600 w-full text-center items-center p-7 rounded-b-2xl flex flex-col gap-3 mb-1">


        <div className="md:w-[100%] md:flex md:items-center md:justify-center md:gap-6">
          <Link href={"/"}>
          <Image
            src={"/botao-de-inicio.png"}
            alt="magalu"
            width={30}
            height={30}
            className="hidden md:flex"
            ></Image></Link>
          

          <input
            type="text"
            className=" rounded-sm w-[98%] md:w-[50%] p-2 text-left "
            placeholder="Como posso te ajudar?"
          />
        </div>

        <ButtonAddContato />


      </div>


      <div className="w-[100%] mt-40 justify-items-center">
        <Contacts contacts={contacts} />
      </div>



    </div>

  );
}
