export default function BookingForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      nama: form.nama.value,
      nomor: form.nomor.value,
      jadwal: form.jadwal.value,
      layanan: form.layanan.value
    };

    // Simpan ke Google Sheets via API
    await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    // Redirect ke WhatsApp
    const pesan = `Halo Admin, saya ingin booking:\n\nNama: ${data.nama}\nNomor: ${data.nomor}\nJadwal: ${data.jadwal}\nLayanan: ${data.layanan}`;
    window.open(`https://wa.me/6283106346274?text=${encodeURIComponent(pesan)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Input Fields */}
    </form>
  );
}
