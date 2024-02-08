import { login } from '../state/slices/user.slice';
import { ERoles } from '../domain/enums/ERoles';
import { store } from '../state/store';

function Landing() {

  const handleLogin = () => {
    store.dispatch(
      login({
        name: 'Sinsi',
        phone: 666345678,
        role: ERoles.ADMIN,
        surname: "test",
        username: 'sisi',
        uuid: '1234dwqdwqe32423'
      })
    )
  }

  return (
    <div>
      <p>Landing</p>
      <button onClick={handleLogin}>login</button>
    </div>
  )
}

export default Landing
