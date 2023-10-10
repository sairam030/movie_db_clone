function Section({ title, items }) {
  return (
    <section className="pt-[30px] py-10">
      <div className="flex items-center gap-5">
        <h2 className="font-semibold text-2xl">{}</h2>
        {/* <div>
          <Switch items={items} />
        </div> */}
      </div>
    </section>
  );
}
export default Section;
