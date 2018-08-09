public class ViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener{

  @BindView(R.id.textNPM) TextView textViewNPM;
  @BindView(R.id.textNama) TextView textViewNama;
  @BindView(R.id.textKelas) TextView textViewKelas;
  @BindView(R.id.textSesi) TextView textViewSesi;

  public ViewHolder(View itemView) {
      super(itemView);
      ButterKnife.bind(this, itemView);
      itemView.setOnClickListener(this);
  }

  @Override
  public void onClick(View view) {
      String npm = textViewNPM.getText().toString();
      String nama = textViewNama.getText().toString();
      String kelas = textViewKelas.getText().toString();
      String sesi = textViewSesi.getText().toString();

      Intent i = new Intent(context, UpdateActivity.class);
      i.putExtra("npm", npm);
      i.putExtra("nama", nama);
      i.putExtra("kelas", kelas);
      i.putExtra("sesi", sesi);
      context.startActivity(i);
  }
}