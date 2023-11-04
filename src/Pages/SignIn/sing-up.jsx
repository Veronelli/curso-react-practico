import Layout from '../../Components/Layout'
import {InputText} from '../../Components/InputText'
import {Login} from '../../Components/Login'
import {SingUp} from "../../Components/SingUp"

function singUp(){
  return (
    <Layout>
      <div className="my-4">
        <div className="p-2 border-2 border-black">
          <SingUp/>
        </div>
      </div>

    </Layout>
  )
}

export default singUp