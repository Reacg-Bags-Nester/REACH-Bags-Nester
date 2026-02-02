const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-peach-100">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Bags Nester For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Bags Nester is ideal wherever bag components are cut from fabric,
          leather, or synthetics and material wastage must be minimized to
          protect margins.
        </p>

        {/* Bag manufacturers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Bag and luggage manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Factories producing handbags, backpacks, school bags, laptop
              bags, duffels, trolleys, and travel accessories at medium to high
              volumes.
            </li>
            <li>
              Units wanting automated nesting to consistently achieve better
              yield than manual marker making across multiple models and sizes.
            </li>
          </ul>
        </div>

        {/* OEM / ODM */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            OEM / ODM suppliers for global brands
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Manufacturers that develop and produce bags for international
              labels and retailers under OEM/ODM contracts.
            </li>
            <li>
              Plants under strong price pressure that need higher material
              efficiency to stay competitive while meeting brand quality
              standards.
            </li>
          </ul>
        </div>

        {/* Leather goods */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Leather goods manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Units cutting leather bags, wallets, small leather goods, and
              premium accessories where each hide is expensive and variable
              in quality.
            </li>
            <li>
              Factories that combine leather and synthetic materials and must
              control wastage across both material types.
            </li>
          </ul>
        </div>

        {/* School & corporate */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            School, corporate, and promotional bag producers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Companies supplying bulk school bags, office backpacks, and
              promotional bags for events, corporates, and institutions.
            </li>
            <li>
              Producers handling large tender or bulk orders where even small
              percentage savings in fabric directly improve profitability.
            </li>
          </ul>
        </div>

        {/* MSMEs */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Cluster-based MSMEs and job-working units
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Small and medium bag stitching units in industrial clusters
              currently relying on manual marker planning and cutting.
            </li>
            <li>
              Common facility centres using centralized AI-based nesting to
              support many micro units with efficient cut plans.
            </li>
          </ul>
        </div>

        {/* Training & services */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Training centres and service bureaus
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Training institutes teaching digital bag pattern-making and
              nesting, preparing students for modern bag manufacturing roles.
            </li>
            <li>
              Specialized service bureaus offering outsourced marker and
              nesting services to multiple bag factories as a BPO-style
              operation.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
