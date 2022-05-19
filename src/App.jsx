import { useState, useTransition } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const [data, setData] = useState([])
  const [isPending, startTransition] = useTransition() //သူ က render ကို နှစ်ခု ခွဲခြလိုက်တာပါ

  const size = 20000

  const handleChange = (e) => {
    setText(e.target.value) //သူက အရင်လာသင်တာ ကောင်နဲ့ နောက်မှလာသင်တဲ့ကောင်ကို ခွဲပေးလိုက်တာ ပံမှန်ဆိုဒီ handleChange ကြီးတစ်ခု လုံးပြီမှ Render ချပေးမှာပါ အရမ်းကြာပြီ lag နေမှာပါ UseTransition သုံးလိုက်တာ ပုံမှန် အရင် ပြီသင့်တဲ့ ကောင်ကို ခွဲ ပြီ အလုပ်များတဲ့ ကောင်ကို Start transition အုပ်လိုက်တာပါ
    startTransition(() => {
      let i = []
      for (let x = 0; x < size; x++) {
        i.push(e.target.value)
      }
      setData(i)
    })
  }

  return (
    <div className="text-2xl">
      <div>
        <input
          type="text"
          className="border"
          value={text}
          onChange={handleChange}
        />
      </div>
      <div>
        {isPending /* process တစ်ခုလုံ Pending ဖြစ်နေလားကြည့်တာပါ */ ? (
          <h1>Loading...</h1>
        ) : (
          data.map((i, inx) => <p key={inx}>{i}</p>)
        )}
      </div>
    </div>
  )
}

export default App
