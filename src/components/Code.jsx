const Code = ({value, onChange}) => {
  return (
    <textarea cols="30" rows="10" className="code__textarea" placeholder="Paste your code here" value={value} onChange={onChange}>
    </textarea>
  )
}

export default Code