function Secondary() {
  return (
    <div className="grid grid-cols-1 gap-6 py-4">
      <h2 className="text-heading">School Education</h2>
      <form>
        <label>School Name:</label><input type="text" className="form-cmp"/>
        <label>Location:</label><input type="text" className="form-cmp"/>
        <label>Year of Graduation:</label><input type="number" className="form-cmp"/>
        <label>Qualifications:</label><input type="text" className="form-cmp"/>
        <label>Overall GPA:</label><input type="number" className="form-cmp"/>
      </form>
      <div className="grid grid-cols-2 gap-4">
        <div><button type="submit" className="btn-add">Add Another</button></div>
        <div><button type="submit" className="btn-next">Next Page</button></div>
      </div>    </div>
  )
}

export default Secondary