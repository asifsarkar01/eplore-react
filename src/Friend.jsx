
export default function Friend({friend}) {
    const {name,email}=(friend)
  return (
    <div className="box">
        <h4>Name:{name}</h4>
        <h5>Emaill:{email}</h5>
    </div>
  )
}
