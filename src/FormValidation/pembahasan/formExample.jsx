import React from 'react';

export default class FormExample extends React.Component {
  state = {
    nama: '',
    jurusan: '',
    gender: '',
    alamat: '',
    member: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    nama: ${this.state.nama}
    jurusan: ${this.state.jurusan}
    gender: ${this.state.gender}
    alamat: ${this.state.alamat}
    member: ${this.state.member ? 'YES' : 'NO'}
    `);
    this.setState({
      nama: '',
      jurusan: '',
      gender: '',
      alamat: '',
      member: false,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nama: <input name="nama" type="text" onChange={(e) => this.setState({ nama: e.target.value })} />
          </label>
          <br />
          <br />
          <label>
            Jurusan:
            <select name="jurusan" onChange={(e) => this.setState({ jurusan: e.target.value })}>
              <option value="">Pilih Jurusan</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Jenis Kelamin: <input type="radio" value="Laki Laki" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} />
            Laki-Laki
            <input type="radio" value="Perempuan" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} />
            Perempuan
          </label>
          <br />
          <br />
          <label>
            Alamat: <textarea name="alamat" cols="30" rows="10" onChange={(e) => this.setState({ alamat: e.target.value })}></textarea>
          </label>
          <br />
          <br />
          <label>
            Member: <input name="member" type="checkbox" checked={this.state.member} onChange={(e) => this.setState({ member: e.target.checked })} />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
