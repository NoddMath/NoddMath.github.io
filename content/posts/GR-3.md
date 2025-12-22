+++
date = "2025-02-19T15:44:10-04:00"
draft = false
title = "Variational Principles and Noether Theorems in Spacetime Geometry"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity" ]
+++

The guiding slogan of relativity is that **dynamics is geometry**. In practice, one of the cleanest ways to encode dynamics is through a variational principle: an action functional on curves (later on fields), whose critical points satisfy Euler–Lagrange equations. In this lecture we develop the calculus of variations for particle motion in Minkowski spacetime and extract conservation laws via Noether's theorem. The emphasis is on invariant formulations that will survive with minimal change in curved spacetimes.

## Actions on Curves and the Euler–Lagrange Equations

We first recall the finite-dimensional variational framework in a form suited to later generalization.

> [!info] Lagrangian and Action Functional
> Let $Q$ be a smooth manifold (in this lecture $Q=\mathbb{R}^{4}$). A **(time-dependent) Lagrangian** is a smooth function
> $$L:I\times TQ\to \mathbb{R},\quad (\lambda,q,v)\mapsto L(\lambda,q,v),$$
> where $I\subset\mathbb{R}$ is an interval and $v\in T_qQ$.
> For a $C^{1}$ curve $\gamma:I\to Q$, the associated **action** is
> $$\mathcal{S}[\gamma]:=\int_I L(\lambda,\gamma(\lambda),\dot\gamma(\lambda))\,d\lambda.$$

> [!info] Variation With Fixed Endpoints
> A **variation** of a $C^{1}$ curve $\gamma:[a,b]\to Q$ with fixed endpoints is a $C^{1}$ map
> $$\Gamma:(-\varepsilon,\varepsilon)\times[a,b]\to Q$$
> such that $\Gamma(0,\lambda)=\gamma(\lambda)$, and $\Gamma(s,a)=\gamma(a)$, $\Gamma(s,b)=\gamma(b)$ for all $s$.
> The associated **variational vector field** along $\gamma$ is
> $$V(\lambda):=\left.\frac{\partial}{\partial s}\right|_{s=0}\Gamma(s,\lambda)\in T_{\gamma(\lambda)}Q.$$

In local coordinates $q^i$ on $Q$, we write $\gamma(\lambda)=(q^i(\lambda))$ and $\dot\gamma=(\dot q^i)$.

> [!abstract] First Variation Formula
> Let $L$ be a smooth Lagrangian on $TQ$ and $\gamma$ a $C^{2}$ curve. For any fixed-endpoint variation with variational vector field $V$, one has
> $$\left.\frac{d}{ds}\right|_{s=0}\mathcal{S}[\Gamma(s,\cdot)]=\int_a^b\left(\frac{\partial L}{\partial q^i}(\gamma,\dot\gamma)\,V^i+\frac{\partial L}{\partial \dot q^i}(\gamma,\dot\gamma)\,\frac{d}{d\lambda}V^i\right)\,d\lambda,$$
> and after integration by parts (using $V(a)=V(b)=0$),
> $$\left.\frac{d}{ds}\right|_{s=0}\mathcal{S}[\Gamma(s,\cdot)]=\int_a^b\left(\frac{\partial L}{\partial q^i}-\frac{d}{d\lambda}\frac{\partial L}{\partial \dot q^i}\right)(\gamma,\dot\gamma)\,V^i\,d\lambda.$$

> [!success] Proof
> Differentiate under the integral sign in the definition of $\mathcal{S}$ and apply the chain rule:
> $$\frac{d}{ds}L(\lambda,\Gamma,\partial_\lambda\Gamma)=\frac{\partial L}{\partial q^i}\frac{\partial \Gamma^i}{\partial s}+\frac{\partial L}{\partial \dot q^i}\frac{\partial}{\partial s}\left(\frac{\partial \Gamma^i}{\partial \lambda}\right).$$
> Evaluating at $s=0$ gives the first formula with $V^i=\partial_s\Gamma^i|_{s=0}$. Integrating by parts and using $V(a)=V(b)=0$ yields the second formula.

> [!note] Euler–Lagrange Equations
> A $C^{2}$ curve $\gamma$ is a critical point of the action with fixed endpoints if and only if it satisfies the Euler–Lagrange equations
> $$\frac{d}{d\lambda}\frac{\partial L}{\partial \dot q^i}(\lambda,\gamma,\dot\gamma)=\frac{\partial L}{\partial q^i}(\lambda,\gamma,\dot\gamma),\qquad i=1,\dots,\dim Q.$$

> [!success] Proof
> If $\gamma$ is critical then the first variation (after integration by parts) must vanish for all variational vector fields $V$ with compact support in $(a,b)$, hence the coefficient of $V^i$ must vanish, giving the Euler–Lagrange equations. Conversely, if the Euler–Lagrange equations hold then the integrated-by-parts first variation is zero for all fixed-endpoint variations.

## Noether's Theorem in Finite Dimensions

Noether's theorem is the systematic machine producing conserved quantities from symmetries.

> [!info] Conjugate Momentum and Energy Function
> Given a Lagrangian $L(\lambda,q,\dot q)$, define the **conjugate momenta**
> $$p_i:=\frac{\partial L}{\partial \dot q^i},$$
> and the **energy function**
> $$E:=p_i\dot q^i-L.$$

> [!abstract] Energy Conservation for Time-Independent Lagrangians
> If $L$ does not depend explicitly on $\lambda$ (i.e. $\partial L/\partial\lambda=0$), then along any solution of the Euler–Lagrange equations one has
> $$\frac{dE}{d\lambda}=0.$$

> [!success] Proof
> Differentiate $E=p_i\dot q^i-L$:
> $$\frac{dE}{d\lambda}=\dot p_i\dot q^i+p_i\ddot q^i-\frac{\partial L}{\partial q^i}\dot q^i-\frac{\partial L}{\partial \dot q^i}\ddot q^i-\frac{\partial L}{\partial\lambda}.$$
> Using $p_i=\partial L/\partial \dot q^i$ cancels the $\ddot q^i$ terms. Using Euler–Lagrange, $\dot p_i=\partial L/\partial q^i$, cancels the remaining $\dot q^i$ terms. Thus $dE/d\lambda=-\partial L/\partial\lambda$, so if $\partial L/\partial\lambda=0$ then $E$ is constant.

The more general Noether statement concerns a one-parameter family of transformations of $Q$.

> [!info] Infinitesimal Symmetry
> Let $X$ be a smooth vector field on $Q$ with local flow $\Phi_s$. We say $X$ is a **(variational) symmetry** of the Lagrangian $L(\lambda,q,v)$ if
> $$L(\lambda,\Phi_s(q),d\Phi_s(v))=L(\lambda,q,v)$$
> for all $s$ for which the flow is defined (equivalently, the derivative at $s=0$ vanishes).

> [!note] Noether Theorem: Conserved Quantity From a Symmetry
> Assume $X$ is a symmetry of $L$ in the sense that $L(\lambda,\Phi_s(q),d\Phi_s(v))=L(\lambda,q,v)$. Then along any Euler–Lagrange solution $\gamma(\lambda)$, the quantity
> $$J_X(\gamma):=\frac{\partial L}{\partial \dot q^i}(\gamma,\dot\gamma)\,X^i(\gamma)$$
> is constant in $\lambda$, i.e. $\frac{d}{d\lambda}J_X(\gamma)=0$.

> [!success] Proof
> Consider the special variation $\Gamma(s,\lambda)=\Phi_s(\gamma(\lambda))$. Its variational field is $V(\lambda)=X(\gamma(\lambda))$. Since $X$ is a symmetry, the action is invariant under this variation, hence the first variation vanishes.
> Using the first variation formula before integration by parts, we get
> $$0=\int_a^b\left(\frac{\partial L}{\partial q^i}X^i+\frac{\partial L}{\partial \dot q^i}\frac{d}{d\lambda}X^i\right)\,d\lambda.$$
> Along an Euler–Lagrange solution, $\partial L/\partial q^i=\frac{d}{d\lambda}\frac{\partial L}{\partial \dot q^i}$, so the integrand becomes
> $$\frac{d}{d\lambda}\left(\frac{\partial L}{\partial \dot q^i}X^i\right).$$
> Since the interval $[a,b]$ is arbitrary, this derivative must vanish pointwise, giving the claim.

> [!danger] Remark
> For later: the form of $J_X(\gamma)=\frac{\partial L}{\partial \dot q^i}X^i$ is robust. In curved spacetime, if $X$ is a Killing field and $L$ is the **reparameterization-invariant** free-particle Lagrangian, then $J_X$ becomes the conserved “energy” or “angular momentum” along a geodesic.

## The Free Relativistic Particle: Two Equivalent Actions

We now specialize to $Q=\mathbb{R}^{4}$ with the Minkowski metric $\eta$.

> [!info] Proper-Time Length Functional
> For a piecewise $C^{1}$ future-directed timelike curve $\gamma:[a,b]\to\mathbb{R}^{4}$, define
> $$\tau(\gamma)=\int_a^b \sqrt{-\eta(\dot\gamma(\lambda),\dot\gamma(\lambda))}\,d\lambda.$$

> [!info] Free Particle Action
> Fix $m>0$. The **free massive particle action** is
> $$\mathcal{S}_m[\gamma]:=-m\int_a^b \sqrt{-\eta(\dot\gamma,\dot\gamma)}\,d\lambda=-m\,\tau(\gamma).$$

> [!danger] Remark
> The minus sign is conventional with the $(-,+,+,+)$ signature and ensures that for timelike curves the integrand is real and the action is negative. Critical points of $\mathcal{S}_m$ coincide with critical points of $\tau$ (the constant factor is irrelevant).

The action $\mathcal{S}_m$ is **reparameterization-invariant** (a key physical and geometric feature).

> [!abstract] Reparameterization Invariance
> Let $\phi:[\tilde a,\tilde b]\to[a,b]$ be an orientation-preserving $C^{1}$ diffeomorphism. Then for any timelike $C^{1}$ curve $\gamma$,
> $$\mathcal{S}_m[\gamma\circ\phi]=\mathcal{S}_m[\gamma].$$

> [!success] Proof
> Write $\tilde\gamma=\gamma\circ\phi$. Then $\dot{\tilde\gamma}(\sigma)=\dot\gamma(\phi(\sigma))\,\phi'(\sigma)$, hence
> $$\sqrt{-\eta(\dot{\tilde\gamma},\dot{\tilde\gamma})}=\sqrt{-\eta(\dot\gamma,\dot\gamma)}\,\phi'(\sigma).$$
> Therefore
> $$\int_{\tilde a}^{\tilde b}\sqrt{-\eta(\dot{\tilde\gamma},\dot{\tilde\gamma})}\,d\sigma=\int_{\tilde a}^{\tilde b}\sqrt{-\eta(\dot\gamma,\dot\gamma)}\,\phi'(\sigma)\,d\sigma=\int_a^b\sqrt{-\eta(\dot\gamma,\dot\gamma)}\,d\lambda$$
> by change of variables $\lambda=\phi(\sigma)$.

A useful equivalent formulation replaces the square-root Lagrangian by a quadratic one with an auxiliary field.

> [!info] Einbein Action
> Let $e(\lambda)>0$ be a $C^{1}$ function (an auxiliary “einbein”). Define the action
> $$\mathcal{S}_{m,e}[\gamma,e]:=\frac{m}{2}\int_a^b\left(e^{-1}\,\eta(\dot\gamma,\dot\gamma)-e\right)\,d\lambda.$$

> [!abstract] Eliminating the Einbein Recovers the Proper-Time Action
> For fixed $\gamma$, the Euler–Lagrange equation of $\mathcal{S}_{m,e}[\gamma,e]$ with respect to $e$ gives
> $$e(\lambda)=\sqrt{-\eta(\dot\gamma(\lambda),\dot\gamma(\lambda))}.$$
> Substituting this into $\mathcal{S}_{m,e}[\gamma,e]$ yields exactly $\mathcal{S}_m[\gamma]$.

> [!success] Proof
> Varying the integrand with respect to $e$ gives
> $$0=\frac{\partial}{\partial e}\left(\frac{m}{2}\left(e^{-1}\eta(\dot\gamma,\dot\gamma)-e\right)\right)=\frac{m}{2}\left(-e^{-2}\eta(\dot\gamma,\dot\gamma)-1\right),$$
> hence $e^{2}=-\eta(\dot\gamma,\dot\gamma)$, and $e>0$ gives $e=\sqrt{-\eta(\dot\gamma,\dot\gamma)}$.
> Substituting into the action yields
> $$\frac{m}{2}\int\left(\frac{\eta(\dot\gamma,\dot\gamma)}{\sqrt{-\eta(\dot\gamma,\dot\gamma)}}-\sqrt{-\eta(\dot\gamma,\dot\gamma)}\right)d\lambda=\frac{m}{2}\int\left(-\sqrt{-\eta(\dot\gamma,\dot\gamma)}-\sqrt{-\eta(\dot\gamma,\dot\gamma)}\right)d\lambda=-m\int\sqrt{-\eta(\dot\gamma,\dot\gamma)}\,d\lambda.$$

> [!danger] Remark
> The einbein formulation makes the reparameterization symmetry manifest: under $\lambda\mapsto\phi(\lambda)$ one transforms $e$ as a density so that $e\,d\lambda$ is invariant. We will later see the same logic in the Einstein–Hilbert action, where diffeomorphism invariance forces constraints.

## Euler–Lagrange for the Free Particle and the Mass Shell Constraint

Let us compute the Euler–Lagrange equation for the free particle action directly in coordinates. Write $\gamma(\lambda)=x^\mu(\lambda)$. The Lagrangian is
$$L(x,\dot x)=-m\sqrt{-\eta_{\mu\nu}\dot x^\mu\dot x^\nu}.$$
Since $L$ does not depend on $x^\mu$, the Euler–Lagrange equation is simply
$$\frac{d}{d\lambda}\frac{\partial L}{\partial \dot x^\mu}=0.$$
This motivates the definition of (covariant) four-momentum.

> [!info] Four-Momentum From the Action
> For the free massive particle Lagrangian, define
> $$p_\mu:=\frac{\partial L}{\partial \dot x^\mu}= m\,\frac{\eta_{\mu\nu}\dot x^\nu}{\sqrt{-\eta(\dot x,\dot x)}}.$$
> Equivalently, raising indices,
> $$p^\mu:=\eta^{\mu\nu}p_\nu= m\,\frac{\dot x^\mu}{\sqrt{-\eta(\dot x,\dot x)}}.$$

> [!abstract] Free Motion: Constant Four-Momentum
> A $C^{2}$ timelike curve $\gamma$ is a critical point of $\mathcal{S}_m$ with fixed endpoints if and only if the four-momentum is constant:
> $$\frac{dp_\mu}{d\lambda}=0.$$

> [!success] Proof
> The Euler–Lagrange equations reduce to $\frac{d}{d\lambda}\left(\frac{\partial L}{\partial \dot x^\mu}\right)=0$, which is exactly $\frac{dp_\mu}{d\lambda}=0$.

> [!abstract] Proper-Time Gauge and Inertial Worldlines
> If $\lambda=\tau$ is proper time (so $-\eta(\dot x,\dot x)\equiv 1$), then
> $$p^\mu = m\,\dot x^\mu,$$
> and the Euler–Lagrange equation becomes
> $$\ddot x^\mu(\tau)=0.$$
> Hence critical curves are exactly timelike affine lines in $\mathbb{R}^{4}$.

> [!success] Proof
> If $-\eta(\dot x,\dot x)=1$, then $p^\mu=m\dot x^\mu$. Constancy of $p^\mu$ is then $\ddot x^\mu=0$.

> [!abstract] Mass Shell
> For any parameterization of a timelike critical curve, the momentum satisfies
> $$\eta^{\mu\nu}p_\mu p_\nu = -m^2.$$

> [!success] Proof
> Compute using $p_\mu=m\,\eta_{\mu\nu}\dot x^\nu/\sqrt{-\eta(\dot x,\dot x)}$:
> $$\eta^{\mu\nu}p_\mu p_\nu = m^2\,\frac{\eta^{\mu\nu}\eta_{\mu\alpha}\dot x^\alpha\eta_{\nu\beta}\dot x^\beta}{-\eta(\dot x,\dot x)} = m^2\,\frac{\eta_{\alpha\beta}\dot x^\alpha\dot x^\beta}{-\eta_{\gamma\delta}\dot x^\gamma\dot x^\delta}=-m^2.$$

> [!danger] Remark
> The identity $\eta^{\mu\nu}p_\mu p_\nu=-m^2$ is the invariant form of the energy–momentum relation. It is not an extra equation of motion; it is built into the square-root Lagrangian. In the einbein formulation, it arises as the Euler–Lagrange equation for $e$ (i.e. as a constraint associated to reparameterization invariance).

## Reparameterization Invariance and the Vanishing Hamiltonian

A characteristic feature of the free relativistic particle is that the action is homogeneous of degree $1$ in $\dot x$, and this forces a constraint on the “energy function” $E=p_\mu\dot x^\mu-L$.

> [!abstract] Homogeneity and the Hamiltonian Constraint
> Let $L(\dot x)$ be a Lagrangian homogeneous of degree $1$ in $\dot x$ (i.e. $L(\alpha \dot x)=\alpha L(\dot x)$ for all $\alpha>0$). Then, with $p_\mu=\partial L/\partial \dot x^\mu$, one has the identity
> $$E:=p_\mu\dot x^\mu - L \equiv 0.$$
> For the free particle square-root Lagrangian $L=-m\sqrt{-\eta(\dot x,\dot x)}$, this holds identically.

> [!success] Proof
> Euler's homogeneous function theorem gives
> $$\dot x^\mu\frac{\partial L}{\partial \dot x^\mu}=L,$$
> hence $p_\mu\dot x^\mu=L$ and therefore $E=0$.

> [!danger] Remark
> This phenomenon generalizes: gauge symmetries (including reparameterization invariance and diffeomorphism invariance) lead to constraints rather than ordinary conservation laws. Later, in general relativity, diffeomorphism invariance yields the Hamiltonian and momentum constraint equations in the $3+1$ formalism.

## Noether Charges for Spacetime Symmetries

We now apply Noether's theorem to the symmetry group of Minkowski space.

### Translations: Conservation of Four-Momentum

Translations $x^\mu\mapsto x^\mu+a^\mu$ are symmetries since $L$ depends only on $\dot x$. The corresponding infinitesimal generators are constant vector fields $X=\partial_\mu$. Noether's theorem gives that
$$J_{\partial_\mu} = \frac{\partial L}{\partial \dot x^\mu}=p_\mu$$
is conserved, i.e. $dp_\mu/d\lambda=0$, which we already saw as the Euler–Lagrange eq_
