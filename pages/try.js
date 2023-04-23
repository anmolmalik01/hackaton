import { data } from "autoprefixer";
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import axios from "axios";

export default function Component() {

  const { data: session } = useSession()

  const [name, setname] = useState("")
const [mail, setmail] = useState("")
  useEffect(() => {

    if (session) {
      setname(session.user?.name)
      setmail(session.user?.email)
    }
    console.log(name)
  }, [])

  if (session) {

    const axios = require('axios');
    const FormData = require('form-data');
    let data = new FormData();
    data.append('Collage_name', 'chandigarh');
    data.append('Description', 'best');
    data.append('Name', name);
    data.append('Email', mail);
    data.append('Skills', 'rl');
    data.append('year', '2026');

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://adi.adityaberry.repl.co/api/register_user',
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

  }
  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )

}