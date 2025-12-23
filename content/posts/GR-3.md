+++
date = "2025-02-19T15:44:10-04:00"
draft = false
title = "Variational Principles and Noether Theorems in Spacetime Geometry"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

The guiding slogan of relativity is that **dynamics is geometry**. One reason this slogan is not just poetry is that the simplest and most robust way to encode a dynamical law is often a variational principle: choose an **action functional** whose critical points are the allowed motions.

There are two structural themes in relativity that we want to make completely explicit from the start.

1. **Lorentz invariance.** The equations of motion should not depend on which inertial coordinates you prefer.
2. **Reparameterization invariance.** A worldline is a geometric curve in spacetime; the choice of parameter along that curve is not physical.

Both features are already present for a free particle in Minkowski space, and both will survive into curved spacetime with minimal change. A good mental map for this lecture is:

$$\textit{action} \ \Rightarrow\ \textit{Euler–Lagrange equations}, \quad \textit{symmetry} \ \Rightarrow\ \textit{Noether charge}.$$

In relativity, one more arrow is worth remembering:

$$\textit{gauge-type symmetry (e.g.\ reparameterization)}\ \Rightarrow\ \textit{constraint}.$$

## Actions on Curves and the Euler–Lagrange Equations

We recall the variational framework in a form we can later transplant to a Lorentzian manifold $(M,g)$. For now the configuration space is $Q=\mathbb{R}^4$.

> [!info] Lagrangian and Action Functional
> Let $Q$ be a smooth manifold. A **(time-dependent) Lagrangian** is a smooth function
> $$L:I\times TQ\to\mathbb{R},\quad (\lambda,q,v)\mapsto L(\lambda,q,v),$$
> where $I\subset\mathbb{R}$ is an interval and $v\in T_qQ$.
> For a $C^{1}$ curve $\gamma:I\to Q$, the associated **action** is
> $$\mathcal{S}[\gamma]:=\int_I L(\lambda,\gamma(\lambda),\dot\gamma(\lambda))\,d\lambda.$$

> [!info] Variation with Fixed Endpoints
> A **variation** of a $C^{1}$ curve $\gamma:[a,b]\to Q$ with fixed endpoints is a $C^{1}$ map
> $$\Gamma:(-\varepsilon,\varepsilon)\times[a,b]\to Q$$
> such that $\Gamma(0,\lambda)=\gamma(\lambda)$ and $\Gamma(s,a)=\gamma(a)$, $\Gamma(s,b)=\gamma(b)$ for all $s$.
> The associated **variational vector field** along $\gamma$ is
> $$V(\lambda):=\left.\frac{\partial}{\partial s}\right|_{s=0}\Gamma(s,\lambda)\in T_{\gamma(\lambda)}Q.$$

In local coordinates $q^i$ on $Q$, write $\gamma(\lambda)=(q^i(\lambda))$ and $\dot\gamma=(\dot q^i)$.

> [!abstract] First Variation Formula
> Let $L$ be a smooth Lagrangian and let $\gamma$ be a $C^{2}$ curve. For any fixed-endpoint variation with variational vector field $V$, one has
> $$\left.\frac{d}{ds}\right|_{s=0}\mathcal{S}[\Gamma(s,\cdot)]=\int_a^b\left(\frac{\partial L}{\partial q^i}(\gamma,\dot\gamma)\,V^i+\frac{\partial L}{\partial \dot q^i}(\gamma,\dot\gamma)\,\frac{d}{d\lambda}V^i\right)\,d\lambda,$$
> and after integration by parts (using $V(a)=V(b)=0$),
> $$\left.\frac{d}{ds}\right|_{s=0}\mathcal{S}[\Gamma(s,\cdot)]=\int_a^b\left(\frac{\partial L}{\partial q^i}-\frac{d}{d\lambda}\frac{\partial L}{\partial \dot q^i}\right)(\gamma,\dot\gamma)\,V^i\,d\lambda.$$

> [!success] Proof
> Differentiate under the integral sign and apply the chain rule:
> $$\frac{d}{ds}L(\lambda,\Gamma,\partial_\lambda\Gamma)=\frac{\partial L}{\partial q^i}\frac{\partial \Gamma^i}{\partial s}+\frac{\partial L}{\partial \dot q^i}\frac{\partial}{\partial s}\left(\frac{\partial \Gamma^i}{\partial \lambda}\right).$$
> Evaluating at $s=0$ gives the first formula with $V^i=\partial_s\Gamma^i|_{s=0}$. Integrating by parts and using $V(a)=V(b)=0$ yields the second formula.

> [!note] Euler–Lagrange Equations
> A $C^{2}$ curve $\gamma$ is a critical point of $\mathcal{S}$ with fixed endpoints if and only if it satisfies
> $$\frac{d}{d\lambda}\frac{\partial L}{\partial \dot q^i}(\lambda,\gamma,\dot\gamma)=\frac{\partial L}{\partial q^i}(\lambda,\gamma,\dot\gamma),\quad i=1,\dots,\dim Q.$$

> [!success] Proof
> If $\gamma$ is critical, then the first variation vanishes for all variational vector fields $V$ with compact support in $(a,b)$. Hence the coefficient of each $V^i$ must vanish, giving the Euler–Lagrange equations. Conversely, if the Euler–Lagrange equations hold, then the integrand in the integrated-by-parts formula is identically zero, so the first variation vanishes for all fixed-endpoint variations.

> [!danger] A Coordinate-Free Slogan
> The object $\frac{\partial L}{\partial \dot q^i}\,dq^i$ is a covector along the curve, the **conjugate momentum**. In curved spacetime we will reinterpret the same construction using the metric to turn velocities into momenta.

## Noether’s Theorem in Finite Dimensions

Noether’s theorem is the machine that turns symmetry into conservation law. In relativity this is not a luxury; it is how you systematically produce energy, momentum, and angular momentum from spacetime symmetries.

> [!info] Conjugate Momentum and Energy Function
> Given a Lagrangian $L(\lambda,q,\dot q)$, define the **conjugate momenta**
> $$p_i:=\frac{\partial L}{\partial \dot q^i},$$
> and the **energy function**
> $$E:=p_i\dot q^i-L.$$

> [!abstract] Energy Conservation for Time-Independent Lagrangians
> If $L$ does not depend explicitly on $\lambda$, then along any Euler–Lagrange solution one has
> $$\frac{dE}{d\lambda}=0.$$

> [!success] Proof
> Differentiate $E=p_i\dot q^i-L$:
> $$\frac{dE}{d\lambda}=\dot p_i\dot q^i+p_i\ddot q^i-\frac{\partial L}{\partial q^i}\dot q^i-\frac{\partial L}{\partial \dot q^i}\ddot q^i-\frac{\partial L}{\partial\lambda}.$$
> Using $p_i=\partial L/\partial \dot q^i$ cancels the $\ddot q^i$ terms. Using Euler–Lagrange, $\dot p_i=\partial L/\partial q^i$, cancels the remaining $\dot q^i$ terms. Thus $dE/d\lambda=-\partial L/\partial\lambda$, so if $\partial L/\partial\lambda=0$ then $E$ is constant.

More generally, we consider a one-parameter family of transformations of $Q$.

> [!info] Infinitesimal Symmetry
> Let $X$ be a smooth vector field on $Q$ with local flow $\Phi_s$. We say $X$ is a **(variational) symmetry** of $L(\lambda,q,v)$ if
> $$L(\lambda,\Phi_s(q),d\Phi_s(v))=L(\lambda,q,v)$$
> for all $s$ for which the flow is defined.

> [!note] Noether Theorem: Conserved Quantity from a Symmetry
> Assume $X$ is a symmetry of $L$. Then along any Euler–Lagrange solution $\gamma(\lambda)$, the quantity
> $$J_X(\gamma):=\frac{\partial L}{\partial \dot q^i}(\gamma,\dot\gamma)\,X^i(\gamma)$$
> is constant in $\lambda$.

> [!success] Proof
> Consider the special variation $\Gamma(s,\lambda)=\Phi_s(\gamma(\lambda))$. Its variational field is $V(\lambda)=X(\gamma(\lambda))$. Since $X$ is a symmetry, the action is invariant under this variation, hence the first variation vanishes. Using the first variation formula before integration by parts, we obtain
> $$0=\int_a^b\left(\frac{\partial L}{\partial q^i}X^i+\frac{\partial L}{\partial \dot q^i}\frac{d}{d\lambda}X^i\right)\,d\lambda.$$
> Along an Euler–Lagrange solution, $\frac{\partial L}{\partial q^i}=\frac{d}{d\lambda}\frac{\partial L}{\partial \dot q^i}$, so the integrand becomes
> $$\frac{d}{d\lambda}\left(\frac{\partial L}{\partial \dot q^i}X^i\right).$$
> Since $[a,b]$ is arbitrary, this derivative vanishes pointwise, proving $\frac{d}{d\lambda}J_X=0$.

> [!danger] A Useful Refinement: Symmetries Up to a Total Derivative
> Often a transformation preserves $L$ only up to adding $\frac{d}{d\lambda}F(\lambda,q)$. In that case the conserved quantity becomes $J_X-F$. This “up to a boundary term” flexibility will matter later when we discuss gauge fields and Lagrangians that are invariant only modulo divergence terms.

## The Free Relativistic Particle: Two Equivalent Actions

We now specialize to $Q=\mathbb{R}^4$ with Minkowski metric $\eta$. A massive particle traces a future-directed timelike curve, and the metric tells the clock on that curve what to read.

> [!info] Proper-Time Functional
> For a piecewise $C^{1}$ future-directed timelike curve $\gamma:[a,b]\to\mathbb{R}^{4}$, define
> $$\tau(\gamma)=\int_a^b \sqrt{-\eta(\dot\gamma(\lambda),\dot\gamma(\lambda))}\,d\lambda.$$

> [!info] Free Massive Particle Action
> Fix $m>0$. The **free massive particle action** is
> $$\mathcal{S}_m[\gamma]:=-m\int_a^b \sqrt{-\eta(\dot\gamma,\dot\gamma)}\,d\lambda=-m\,\tau(\gamma).$$

> [!danger] Why the Square Root?
> The integrand $\sqrt{-\eta(\dot\gamma,\dot\gamma)}$ is exactly the infinitesimal proper time element along the worldline. Thus the action is (up to the constant factor $m$) the proper time elapsed, with an overall sign convention compatible with the $(-,+,+,+)$ signature.

The most geometric feature of $\mathcal{S}_m$ is that it does not care how you parametrize the worldline.

> [!abstract] Reparameterization Invariance
> Let $\phi:[\tilde a,\tilde b]\to[a,b]$ be an orientation-preserving $C^{1}$ diffeomorphism. Then for any timelike $C^{1}$ curve $\gamma$,
> $$\mathcal{S}_m[\gamma\circ\phi]=\mathcal{S}_m[\gamma].$$

> [!success] Proof
> Write $\tilde\gamma=\gamma\circ\phi$. Then $\dot{\tilde\gamma}(\sigma)=\dot\gamma(\phi(\sigma))\,\phi'(\sigma)$, hence
> $$\sqrt{-\eta(\dot{\tilde\gamma},\dot{\tilde\gamma})}=\sqrt{-\eta(\dot\gamma,\dot\gamma)}\,\phi'(\sigma).$$
> Therefore
> $$\int_{\tilde a}^{\tilde b}\sqrt{-\eta(\dot{\tilde\gamma},\dot{\tilde\gamma})}\,d\sigma=\int_a^b\sqrt{-\eta(\dot\gamma,\dot\gamma)}\,d\lambda$$
> by the change of variables $\lambda=\phi(\sigma)$.

A technically convenient reformulation replaces the square root by a quadratic expression at the cost of introducing an auxiliary field. This is not just a trick: it makes the constraint structure completely transparent.

> [!info] Einbein Action
> Let $e(\lambda)>0$ be a $C^{1}$ function (an auxiliary **einbein**). Define
> $$\mathcal{S}_{m,e}[\gamma,e]:=\frac{m}{2}\int_a^b\left(e^{-1}\,\eta(\dot\gamma,\dot\gamma)-e\right)\,d\lambda.$$

> [!abstract] Eliminating the Einbein Recovers the Proper-Time Action
> For fixed $\gamma$, the Euler–Lagrange equation obtained by varying $e$ is
> $$e(\lambda)=\sqrt{-\eta(\dot\gamma(\lambda),\dot\gamma(\lambda))}.$$
> Substituting this back into $\mathcal{S}_{m,e}$ yields exactly $\mathcal{S}_m$.

> [!success] Proof
> Treat the integrand as a function of $e$:
> $$\frac{m}{2}\left(e^{-1}\eta(\dot\gamma,\dot\gamma)-e\right).$$
> Differentiating with respect to $e$ gives
> $$0=\frac{m}{2}\left(-e^{-2}\eta(\dot\gamma,\dot\gamma)-1\right),$$
> hence $e^{2}=-\eta(\dot\gamma,\dot\gamma)$. Since $e>0$, we obtain $e=\sqrt{-\eta(\dot\gamma,\dot\gamma)}$. Substituting gives
> $$\frac{m}{2}\int\left(\frac{\eta(\dot\gamma,\dot\gamma)}{\sqrt{-\eta(\dot\gamma,\dot\gamma)}}-\sqrt{-\eta(\dot\gamma,\dot\gamma)}\right)d\lambda=-m\int\sqrt{-\eta(\dot\gamma,\dot\gamma)}\,d\lambda.$$

> [!danger] A First Glimpse of “Gauge Symmetry”
> The pair $(\gamma,e)$ has redundancy: reparameterizing $\lambda$ changes $\dot\gamma$ and $e$ but not the geometric worldline or the value of the action. This is the prototype of a gauge symmetry: the symmetry does not merely give a conserved number; it enforces a constraint.

## Euler–Lagrange for the Free Particle and the Mass-Shell Constraint

Write $\gamma(\lambda)=x^\mu(\lambda)$ in standard inertial coordinates.

> [!abstract] Equation of Motion for the Square-Root Action
> For the Lagrangian
> $$L(x,\dot x)=-m\sqrt{-\eta_{\mu\nu}\dot x^\mu\dot x^\nu},$$
> the Euler–Lagrange equations reduce to
> $$\frac{d}{d\lambda}\left(\frac{\dot x^\mu}{\sqrt{-\eta(\dot x,\dot x)}}\right)=0.$$
> Equivalently, the covector
> $$p_\mu:=\frac{\partial L}{\partial \dot x^\mu}= m\,\frac{\eta_{\mu\nu}\dot x^\nu}{\sqrt{-\eta(\dot x,\dot x)}}$$
> is constant along solutions.

> [!success] Proof
> Since $L$ depends on $\dot x$ but not on $x$, Euler–Lagrange gives $\frac{d}{d\lambda}\frac{\partial L}{\partial \dot x^\mu}=0$. Compute
> $$\frac{\partial L}{\partial \dot x^\mu}=-m\cdot \frac{1}{2}\big(-\eta(\dot x,\dot x)\big)^{-1/2}\cdot \big(-2\eta_{\mu\nu}\dot x^\nu\big)= m\,\frac{\eta_{\mu\nu}\dot x^\nu}{\sqrt{-\eta(\dot x,\dot x)}}.$$
> Raising indices with $\eta^{\mu\nu}$ gives the equivalent vector form.

> [!abstract] Proper-Time Parameter and Inertial Worldlines
> If $\lambda=\tau$ is proper time (so $-\eta(\dot x,\dot x)\equiv 1$), then
> $$p^\mu = m\,\dot x^\mu,\quad\text{and}\quad \ddot x^\mu(\tau)=0.$$
> Hence critical curves are exactly timelike affine lines in $\mathbb{R}^{4}$.

> [!success] Proof
> If $-\eta(\dot x,\dot x)=1$, then $p^\mu=m\dot x^\mu$. Constancy of $p^\mu$ is then $\ddot x^\mu=0$.

> [!abstract] Mass Shell
> Along any timelike solution (in any parameterization), the momentum satisfies
> $$\eta^{\mu\nu}p_\mu p_\nu = -m^2.$$

> [!success] Proof
> Using the definition of $p_\mu$,
> $$\eta^{\mu\nu}p_\mu p_\nu= m^2\,\frac{\eta^{\mu\nu}\eta_{\mu\alpha}\dot x^\alpha\eta_{\nu\beta}\dot x^\beta}{-\eta(\dot x,\dot x)}= m^2\,\frac{\eta_{\alpha\beta}\dot x^\alpha\dot x^\beta}{-\eta_{\gamma\delta}\dot x^\gamma\dot x^\delta}=-m^2.$$

> [!danger] Remark
> This is the invariant energy–momentum relation. If you later choose an observer $U$ and decompose $p=E_U(p)\,U+\mathbf{p}_U(p)$, this becomes $E_U(p)^2-|\mathbf{p}_U(p)|^2=m^2$ in the observer’s rest space.

## Reparameterization Invariance and Constraints

Reparameterization invariance is not an “extra bonus symmetry”; it reshapes the Hamiltonian picture.

> [!abstract] Homogeneity and Vanishing Energy Function
> Let $L(q,\dot q)$ be homogeneous of degree $1$ in $\dot q$:
> $$L(q,\alpha\dot q)=\alpha L(q,\dot q)\quad \text{for all }\alpha>0.$$
> Then, with $p_i=\partial L/\partial \dot q^i$, one has the identity
> $$E:=p_i\dot q^i-L\equiv 0.$$
> In particular, for $L=-m\sqrt{-\eta(\dot x,\dot x)}$ one has $E\equiv 0$.

> [!success] Proof
> Euler’s theorem for homogeneous functions gives $\dot q^i\frac{\partial L}{\partial \dot q^i}=L$. Thus $p_i\dot q^i=L$, hence $E=0$.

> [!danger] Constraint vs. Conservation Law
> For time-translation symmetry in ordinary mechanics, “energy conservation” says $\frac{dE}{d\lambda}=0$. Here, reparameterization invariance forces the stronger statement $E\equiv 0$ identically. This is the first clean example of the general phenomenon: gauge-type symmetries produce constraints.

The einbein formulation makes the constraint appear as an Euler–Lagrange equation.

> [!abstract] Einbein Equation as the Mass-Shell Constraint
> For the einbein action $\mathcal{S}_{m,e}$, define
> $$p_\mu:=\frac{\partial}{\partial \dot x^\mu}\left(\frac{m}{2}\left(e^{-1}\eta(\dot x,\dot x)-e\right)\right)= m\,e^{-1}\eta_{\mu\nu}\dot x^\nu.$$
> Then
> $$\eta^{\mu\nu}p_\mu p_\nu = -m^2$$
> is equivalent to the Euler–Lagrange equation for $e$.

> [!success] Proof
> From $p_\mu=m e^{-1}\eta_{\mu\nu}\dot x^\nu$ we get $p^\mu=m e^{-1}\dot x^\mu$ and hence
> $$\eta(p,p)=\eta_{\mu\nu}p^\mu p^\nu=m^2 e^{-2}\eta(\dot x,\dot x).$$
> The $e$–equation of motion gives $e^2=-\eta(\dot x,\dot x)$, so $\eta(p,p)=-m^2$. Conversely, if $\eta(p,p)=-m^2$, then $m^2 e^{-2}\eta(\dot x,\dot x)=-m^2$, so $e^2=-\eta(\dot x,\dot x)$.

> [!danger] Massless Particles
> For $m=0$ the square-root action degenerates, and one uses an auxiliary-field action as the correct starting point for null geodesics. This is one reason the einbein viewpoint is not merely cosmetic: it adapts naturally to the massless case.

## Noether Charges for Spacetime Symmetries: The Poincaré Story

The isometries of Minkowski spacetime are the Poincaré transformations: affine maps
$$x\longmapsto \Lambda x + a,\quad \Lambda\in O(1,3),\ a\in\mathbb{R}^4.$$
For a free particle, these symmetries generate the standard conserved quantities.

### Translations: Conservation of Four-Momentum

Translations $x^\mu\mapsto x^\mu+a^\mu$ preserve $L$ because $L$ depends only on $\dot x$. The infinitesimal generators are constant vector fields $X=\partial_\mu$. Noether’s theorem gives
$$J_{\partial_\mu}=\frac{\partial L}{\partial \dot x^\mu}=p_\mu,$$
so $p_\mu$ is conserved.

### Lorentz Transformations: Conservation of Angular Momentum Tensor

Lorentz transformations act linearly: $x\mapsto \Lambda x$ with $\Lambda\in SO^{+}(1,3)$. Infinitesimally, take $\Omega\in\mathfrak{so}(1,3)$, i.e. $\Omega^T\eta+\eta\Omega=0$, and consider the vector field
$$X_\Omega(x)=\Omega x.$$

> [!abstract] Conserved Lorentz Charges
> For the free particle, for each $\Omega\in\mathfrak{so}(1,3)$ the quantity
> $$J_\Omega := p_\mu\,(\Omega x)^\mu$$
> is constant along solutions. Equivalently, the antisymmetric tensor
> $$M^{\mu\nu}:=x^\mu p^\nu - x^\nu p^\mu$$
> is conserved: $\frac{d}{d\lambda}M^{\mu\nu}=0$.

> [!success] Proof
> Lorentz transformations preserve $\eta(\dot x,\dot x)$ and hence preserve $L$, so $X_\Omega$ is a variational symmetry. Noether gives conservation of $p_\mu X_\Omega^\mu=p_\mu(\Omega x)^\mu$.
>
> Define $\Omega_{\mu\nu}:=\eta_{\mu\alpha}\Omega^\alpha{}_\nu$. The relation $\Omega^T\eta+\eta\Omega=0$ is equivalent to $\Omega_{\mu\nu}=-\Omega_{\nu\mu}$. Then
> $$J_\Omega = p_\mu \Omega^\mu{}_\nu x^\nu=\Omega_{\mu\nu}x^\nu p^\mu=\frac12\,\Omega_{\mu\nu}(x^\nu p^\mu-x^\mu p^\nu)=\frac12\,\Omega_{\mu\nu}M^{\mu\nu}.$$
> Since $\Omega_{\mu\nu}$ is an arbitrary antisymmetric tensor, constancy of $J_\Omega$ for all $\Omega$ is equivalent to constancy of all components of $M^{\mu\nu}$.

> [!danger] What Is Inside $M^{\mu\nu}$?
> The six independent components split (after choosing an observer) into three ordinary spatial angular momenta and three “boost” charges. This split is observer-dependent; the covariant object $M^{\mu\nu}$ is the invariant packaging.

## Killing Fields and the Curved-Spacetime Template

The cleanest way to phrase Noether charges in relativity is to replace “a particular symmetry transformation” by “a Killing field.” This is exactly the language that survives on a curved spacetime.

> [!info] Killing Field in Minkowski Space
> A smooth vector field $K$ on $\mathbb{R}^4$ is a **Killing field** if it generates isometries of $\eta$, equivalently if it satisfies
> $$\partial_\mu K_\nu+\partial_\nu K_\mu=0,\quad K_\mu:=\eta_{\mu\nu}K^\nu.$$

> [!abstract] Classification of Killing Fields in Minkowski Space
> A vector field $K$ on $\mathbb{R}^4$ is Killing if and only if it has the affine form
> $$K(x)=a+\Omega x,$$
> where $a\in\mathbb{R}^4$ is constant and $\Omega\in\mathfrak{so}(1,3)$.

> [!success] Proof
> If $K(x)=a+\Omega x$ with $\Omega\in\mathfrak{so}(1,3)$, then $K_\mu=\eta_{\mu\nu}a^\nu+\Omega_{\mu\nu}x^\nu$ with $\Omega_{\mu\nu}=-\Omega_{\nu\mu}$, so $\partial_\alpha K_\mu=\Omega_{\mu\alpha}$ is constant and antisymmetric in $(\mu,\alpha)$; hence $\partial_\alpha K_\mu+\partial_\mu K_\alpha=0$.
>
> Conversely, assume $K$ is Killing. Differentiate the Killing equation:
> $$\partial_\alpha\partial_\mu K_\nu+\partial_\alpha\partial_\nu K_\mu=0.$$
> Write the same identity with cyclic permutations of $(\alpha,\mu,\nu)$ and add/subtract to obtain
> $$\partial_\alpha\partial_\mu K_\nu = 0$$
> for all indices (this is the standard argument showing second derivatives vanish). Hence $K$ is affine: $K^\mu(x)=a^\mu+\Omega^\mu{}_\nu x^\nu$ with constant coefficients. Plugging this into the Killing equation forces $\Omega_{\mu\nu}$ to be antisymmetric, i.e. $\Omega\in\mathfrak{so}(1,3)$.

Now the Noether charge can be written in one line.

> [!abstract] Conserved Quantity from a Killing Field: Flat Case
> Let $\gamma$ be a free massive particle worldline parameterized by proper time $\tau$, with four-velocity $U=\dot\gamma$ and momentum $p=mU$. If $K$ is a Killing field on Minkowski space, then the scalar
> $$\mathcal{Q}_K(\tau):=-\eta(p,K)\big|_{\gamma(\tau)} = -m\,\eta(U,K)\big|_{\gamma(\tau)}$$
> is constant along $\gamma$.

> [!success] Proof
> In proper-time gauge the equation of motion is $\ddot x^\mu=0$, so $U^\mu$ is constant. Differentiate $\eta(U,K)$ along the curve:
> $$\frac{d}{d\tau}\eta(U,K)=U^\alpha\,\partial_\alpha(K_\mu)\,U^\mu=U^\alpha U^\mu\,\partial_\alpha K_\mu.$$
> Symmetrizing indices gives
> $$U^\alpha U^\mu\,\partial_\alpha K_\mu=\frac12\,U^\alpha U^\mu(\partial_\alpha K_\mu+\partial_\mu K_\alpha)=0$$
> by the Killing equation. Therefore $\frac{d}{d\tau}\eta(U,K)=0$, hence $\mathcal{Q}_K$ is constant.

> [!danger] Why This Is the Real Template
> In curved spacetime the same statement remains true with one minimal substitution: ordinary derivatives become covariant derivatives, and free particle motion becomes the geodesic equation. If $(M,g)$ admits a Killing field $K$ and $\gamma$ is a geodesic with tangent $U$, then $g(U,K)$ is conserved. We will re-derive this once we have the Levi–Civita connection.

In this lecture we developed the variational viewpoint for relativistic systems and derived conserved quantities from symmetries using Noether’s theorem. This framework will later generalize cleanly to curved spacetimes and to the gravitational action itself. Next we begin the differential-geometric machinery on manifolds by introducing covariant derivatives and connections.