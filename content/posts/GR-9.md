+++
date = "2025-03-11T15:44:10-04:00"
draft = false
title = 'From the Newtonian Limit to The Shape of The Field Equation: Why $G_{ab}=8\pi T_{ab}$'
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

Einstein’s equation is often presented as a brilliant guess. This lecture is about turning that “guess” into something that looks almost inevitable.

There are two demands that do most of the heavy lifting:

1. **Consistency with local energy-momentum balance:** whatever sits on the left-hand side must have identically vanishing divergence, so that the right-hand side can represent physical stress-energy with $\nabla^aT_{ab}=0$.
2. **Consistency with Newton:** in the weak-field, slow-motion regime, the metric should reproduce Poisson's equation $\Delta \Phi = 4\pi\rho$ and Newton's law $\ddot{\mathbf{x}}=-\nabla\Phi$.

We work in $c=G=1$, signature $(-,+,+,+)$.

## What can the left-hand side possibly be?

We want a generally covariant equation for the metric:
a tensor equation built from $g$ and its derivatives, preferably second order (so we are not doing fourth-order gravity by accident).
Curvature is the natural second-derivative object, so the Ricci tensor $Ric_{ab}$ and scalar curvature $R$ are the first candidates.

> [!info] Einstein tensor
> The **Einstein tensor** is
> $$G_{ab}:=Ric_{ab}-\frac12 R\,g_{ab}.$$

The key fact is that $G_{ab}$ is automatically divergence-free.

> [!note] Contracted Bianchi identity
> On any Lorentzian manifold,
> $$\nabla^a G_{ab}=0.$$

> [!success] Proof
> This is a standard contraction of the differential Bianchi identity for the Riemann tensor.
> A clean derivation is: start with $\nabla_{[e}R_{ab]cd}=0$, contract twice using $\nabla g=0$, and rearrange to obtain $\nabla^a(Ric_{ab}-\frac12 R g_{ab})=0$.

> [!danger] Remark
> Why not simply $Ric_{ab}=\kappa T_{ab}$?
> Because $\nabla^a Ric_{ab}=\frac12 \nabla_b R$ in general, so taking the divergence of
> $$Ric_{ab}=\kappa T_{ab}$$
> would force $\nabla_b R=0$ whenever $\nabla^aT_{ab}=0$, i.e. it would force scalar curvature to be constant in all physically reasonable situations.
> That is an unnecessary and incorrect restriction.

So $G_{ab}$ is the canonical second-order, divergence-free object built from the metric.
There is one more term that does not spoil divergence-freeness:

> [!abstract] Cosmological constant term
> For constant $\Lambda$, the tensor $\Lambda g_{ab}$ satisfies $\nabla^a(\Lambda g_{ab})=0$.
> Hence
> $$G_{ab}+\Lambda g_{ab}$$
> is divergence-free.

> [!success] Proof
> Metric compatibility gives $\nabla g=0$, so $\nabla^a(\Lambda g_{ab})=(\nabla^a\Lambda)g_{ab}+\Lambda\nabla^a g_{ab}=0$ when $\Lambda$ is constant.

At this point, a mathematician may ask for a theorem that says “there are no other second-order options of this type.”

> [!note] Quasi-uniqueness of the left-hand side
> In four dimensions, if a symmetric $(0,2)$-tensor $E_{ab}$ is
> 1. built locally from $g$ and at most its first and second derivatives,
> 2. divergence-free for **all** metrics ($\nabla^a E_{ab}\equiv 0$),
> 3. and second-order in the sense that its coordinate expression is quasilinear in the second derivatives of $g$,
> then $E_{ab}$ must be a linear combination
> $$E_{ab}=c_1\,G_{ab}+c_2\,g_{ab}$$
> for constants $c_1,c_2$.

> [!danger] Remark
> This is the precise version of “Bianchi + second-order locks the structure.”
> We will not prove the full classification here, but we will use it as a guiding principle:
> if we want the simplest second-order generally covariant equation compatible with local balance laws, we are led to $G_{ab}+\Lambda g_{ab}$.

Thus the field equation must look like
$$G_{ab}+\Lambda g_{ab}=\kappa\,T_{ab},$$
and the remaining question is: what is $\kappa$? (And when do we include $\Lambda$?)

## Weak-field kinematics: how $\Phi$ hides inside $g_{00}$

Assume a weak, stationary gravitational field and slow test particles.
Choose coordinates where the metric is close to Minkowski:
$$g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu},\qquad |h_{\mu\nu}|\ll 1,$$
and assume time-independence to leading order: $\partial_0 h_{\mu\nu}\approx 0$.

Let a test particle move slowly, so $|\dot x^i|\ll \dot t$.
Then the spatial part of the geodesic equation reduces to
$$\frac{d^2 x^i}{dt^2}\approx -\Gamma^i{}_{00}.$$
To leading order,
$$\Gamma^i{}_{00}\approx -\frac12 \eta^{ij}\partial_j h_{00},$$
so
$$\frac{d^2 x^i}{dt^2}\approx -\partial_i\!\left(-\frac12 h_{00}\right).$$
Comparing with Newton's law $\ddot{\mathbf{x}}=-\nabla\Phi$, we identify the Newtonian potential as
$$\Phi=-\frac12 h_{00},\qquad\text{equivalently}\qquad g_{00}\approx -(1+2\Phi).$$

## Weak-field dynamics: which curvature component becomes Poisson?

Now we ask the dynamical question: what equation does $\Phi$ satisfy?

A convenient form of Einstein's equation is the **trace-reversed** form
$$Ric_{ab} = 8\pi\left(T_{ab}-\frac12 T g_{ab}\right),\qquad T:=g^{ab}T_{ab}.$$
(It is algebraically equivalent to $G_{ab}=8\pi T_{ab}$ when $\Lambda=0$.)

In the Newtonian regime the source is essentially nonrelativistic matter (dust at rest in these coordinates),
so to leading order
$$T_{00}\approx \rho,\qquad T_{0i}\approx 0,\qquad T_{ij}\approx 0,\qquad T\approx g^{00}T_{00}\approx -\rho.$$
Therefore the $00$-component of the trace-reversed right-hand side is approximately
$$8\pi\left(T_{00}-\frac12 T g_{00}\right)\approx 8\pi\left(\rho-\frac12(-\rho)(-1)\right)=4\pi\rho.$$

On the left-hand side, in the same weak, stationary, slow regime, one finds
$$Ric_{00}\approx \Delta\!\left(-\frac12 h_{00}\right)=\Delta\Phi,$$
where $\Delta$ is the flat spatial Laplacian in the chosen nearly-inertial coordinates.

Putting these together, the $00$-component of the field equation becomes
$$\Delta\Phi = 4\pi\rho,$$
which is exactly Poisson's equation in units $G=1$.

> [!abstract] Fixing the coupling constant
> Requiring that the weak-field, slow-motion limit reproduces Newtonian gravity forces
> $$\kappa=8\pi$$
> in
> $$G_{ab}=\kappa T_{ab}.$$

> [!success] Proof
> In the Newtonian regime, the trace-reversed form yields $Ric_{00}\approx 4\pi\rho$.
> Since $G_{ab}=Ric_{ab}-\frac12 Rg_{ab}$ is equivalent to $Ric_{ab}=8\pi(T_{ab}-\frac12 Tg_{ab})$, the constant matching Poisson is $\kappa=8\pi$.

## Where $\Lambda$ fits (and why we can postpone it)

Including $\Lambda$ gives
$$G_{ab}+\Lambda g_{ab}=8\pi T_{ab}.$$
In the Newtonian limit, this introduces a very small correction to Poisson (effectively adding a term proportional to $\Lambda$),
and Solar System physics constrains it to be negligible on those scales.
In cosmology, the same term becomes central. We will treat $\Lambda$ as optional until Part VII, where it naturally reappears as a geometric source for accelerated expansion.

## The Zee-style moral

The field equation is not chosen because it is pretty (though it is).
It is chosen because if you insist that spacetime geometry responds to matter, that local energy-momentum balance is built in, and that Newton is recovered when the field is weak and life is slow, then the equation has essentially no room to wiggle:
$$G_{ab}+\Lambda g_{ab} = 8\pi T_{ab}.$$
In the next lecture we will derive this equation from an action principle, which is the most economical way to guarantee the conservation law automatically.
