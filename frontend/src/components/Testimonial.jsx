
export default function Testimonial() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid max-w-5xl items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from the people who love using our products.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4">
              <span className="h-12 w-12">
                <image src="/placeholder-user.jpg" />
                <span>CN</span>
              </span>
              <div className="grid gap-0.5">
                <div className="font-medium">Jill Watson</div>
                <div className="text-sm text-muted-foreground">CEO, Acme Inc.</div>
              </div>
            </div>
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;The customer service I received was exceptional. The support team went above and beyond to address
              my concerns.&rdquo;
            </blockquote>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4">
              <span className="h-12 w-12">
                <image src="/placeholder-user.jpg" />
                <span>CN</span>
              </span>
              <div className="grid gap-0.5">
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-muted-foreground">CTO, Acme Inc.</div>
              </div>
            </div>
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;The platform is incredibly easy to use and has saved us so much time. Highly recommended!&rdquo;
            </blockquote>
          </div>
          <div className="flex flex-col items-start gap-4 rounded-lg bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-4">
              <span className="h-12 w-12">
                <image src="/placeholder-user.jpg" />
                <span>CN</span>
              </span>
              <div className="grid gap-0.5">
                <div className="font-medium">Jane Doe</div>
                <div className="text-sm text-muted-foreground">Product Manager, Acme Inc.</div>
              </div>
            </div>
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;The platform has been a game-changer for our team. We can now focus on building great products
              instead of managing infrastructure.&rdquo;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}