function Personal() {
  return (
    <div className="grid grid-cols-1 gap-6 py-4">
      <h2 className="text-heading">Personal Information</h2>
      <form>
        <label>First Name(s):</label><input type="text" className="form-cmp"/>
        <label>Last Name(s):</label><input type="text" className="form-cmp"/>
        <label>Email:</label><input type="email" className="form-cmp"/>
        <label>Phone Number:</label><input type="tel" className="form-cmp"/>
        <label>Address:</label><textarea className="form-textarea form-cmp"></textarea>
      </form>
      <button type="submit" className="btn-next">Next Page</button>
    </div>
  )
}

export default Personal