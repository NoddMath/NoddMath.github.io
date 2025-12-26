+++
date = "2025-02-24T15:44:10-04:00"
draft = false
title = "Lorentzian Manifolds: Local Inertial Frames and A Precise Equivalence Principle"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

In Part I we learned a slightly unsettling lesson: even in flat spacetime, an accelerated description manufactures a “gravitational field” (Rindler). The natural next question is the one Einstein could not un-ask:

If acceleration can imitate gravity locally, can gravity be understood as geometry, with “gravity” removable by going to the right local frame, and only the leftover tidal effects being intrinsic?

This lecture turns that story into clean mathematics. The reader is assumed comfortable with smooth manifolds, connections, and Riemannian geometry. Our job is to highlight the **Lorentz-specific traps** and to make “tidal force = curvature” a theorem rather than a slogan.
## Lorentzian preliminaries: what is genuinely different from Riemannian geometry?

> [!info] Lorentzian manifold, time orientation
> A **Lorentzian manifold** is a smooth manifold $M$ equipped with a smooth metric $g$ of signature $(-,+,+,+)$. A **time orientation** is a continuous choice of one of the two connected components of the timelike cone in each tangent space. A Lorentzian manifold equipped with a time orientation is called a **time-oriented spacetime**.

> [!info] Causal character
> A tangent vector $v\in T_pM$ is called
> 1. **timelike** if $g(v,v)<0$,
> 2. **null** if $g(v,v)=0$ and $v\neq 0$,
> 3. **spacelike** if $g(v,v)>0$ (or $v=0$).
> 
> A nonzero vector is **causal** if it is timelike or null. A causal vector is **future-directed** if it lies in the chosen time orientation.

> [!important] Two “Riemannian reflexes” that fail
> 1. There is no globally defined distance function behaving like the Riemannian distance. Timelike separation is measured by **proper time** along timelike curves, and null curves have zero length.
> 2. “Normal coordinates” still exist, but you must not interpret them via minimizing geodesics. Lorentzian geodesics do not play the same minimizing role as in the Riemannian case.

We keep the Levi-Civita connection $\nabla$ of $g$ (torsion-free, metric-compatible), and we adopt the curvature convention
$$ (\nabla_\mu\nabla_\nu-\nabla_\nu\nabla_\mu)V^\rho = R^\rho{}_{\sigma\mu\nu}V^\sigma. $$

## Equivalence principle: versions and the one we actually use

The phrase “equivalence principle” is a family name. Different authors emphasize different members. We list the standard versions and then commit to a working formulation.

> [!info] WEP, EEP, SEP: a useful taxonomy
> 1. **Weak equivalence principle (WEP)**: the trajectory of a freely falling **test** body is independent of its internal composition (universality of free fall). In geometric language, freely falling test bodies follow timelike geodesics of spacetime.
> 2. **Einstein equivalence principle (EEP)**: in a freely falling local inertial frame, all **non-gravitational** laws of physics take the same local form as in special relativity.
> 3. **Strong equivalence principle (SEP)**: EEP holds even for experiments that involve gravity itself, and not just test bodies in a prescribed gravitational field (this is the one that fails in many modified gravities and in some effective-field-theory contexts).

> [!danger] Remark
> EEP is where the geometric viewpoint earns its salary: it says you should be able to choose coordinates near an event so that “gravity disappears” from local nongravitational physics, at least to first order. The warning label is that “local” really means local: tidal effects are real and cannot be transformed away.

> [!info] Working equivalence principle for these notes
> Our standing formulation is:
> 4. **(Geodesic motion)** Freely falling test particles follow timelike geodesics.
> 5. **(Local special relativity)** At each event $p$ and for each freely falling observer through $p$, there exist coordinates adapted to that observer in which
> > $$g_{\mu\nu}(p)=\eta_{\mu\nu},\qquad \partial_\alpha g_{\mu\nu}(p)=0,$$
> > so that nongravitational laws reduce to their special relativistic form at $p$.
> 6. **(Tidal effects)** The first non-removable information about gravity appears at second order and is captured by curvature (made precise below via geodesic deviation and Fermi normal coordinates).

This is strong enough to guide physics and clean enough to be a theorem machine.

## Riemann normal coordinates at a point: local inertial frames as geometry

Fix a point $p\in M$ and choose an orthonormal basis $\{e_{(0)},e_{(1)},e_{(2)},e_{(3)}\}$ of $T_pM$ with $e_{(0)}$ future-directed timelike:
$$ g_p(e_{(a)},e_{(b)})=\eta_{(a)(b)}=\mathrm{diag}(-1,1,1,1)_{(a)(b)}. $$

> [!info] Normal coordinates at $p$
> Let $\exp_p:T_pM\to M$ be the exponential map of $\nabla$. For $v=v^{(a)}e_{(a)}$ in a sufficiently small neighborhood of $0\in T_pM$, define coordinates $x^{(a)}$ near $p$ by
> $$\exp_p(v)=q \quad\Longleftrightarrow\quad x^{(a)}(q)=v^{(a)}.$$
> These are called **(Riemann) normal coordinates** centered at $p$.

> [!note] Local inertial frame theorem
> In normal coordinates centered at $p$,
> $$g_{(a)(b)}(p)=\eta_{(a)(b)},\qquad \Gamma^{(a)}{}_{(b)(c)}(p)=0,\qquad \partial_{(d)}g_{(a)(b)}(p)=0.$$
> In particular, to first order the metric is Minkowskian at $p$ and the geodesic equation has no “force term” at $p$.

> [!success] Proof
> By construction, $d(\exp_p)_0$ is the identity, hence the coordinate basis at $p$ agrees with the chosen orthonormal basis, so $g_{(a)(b)}(p)=\eta_{(a)(b)}$.
>
> A coordinate line $s\mapsto (x^{(a)}=sv^{(a)})$ is the image under $\exp_p$ of the straight line $s\mapsto sv$ in $T_pM$, hence is a geodesic with initial velocity $v$ at $p$. Writing the geodesic equation in these coordinates, for such curves we have at $s=0$:
> $$0=\frac{d^2 x^{(a)}}{ds^2}(0)+\Gamma^{(a)}{}_{(b)(c)}(p)\frac{dx^{(b)}}{ds}(0)\frac{dx^{(c)}}{ds}(0)=\Gamma^{(a)}{}_{(b)(c)}(p)\,v^{(b)}v^{(c)}.$$
> Since $v$ is arbitrary, $\Gamma^{(a)}{}_{(b)(c)}(p)=0$.
>
> Finally, metric compatibility gives $(\nabla_{(d)}g)_{(a)(b)}=0$, i.e.
> $$0=\partial_{(d)}g_{(a)(b)}-\Gamma^{(e)}{}_{(d)(a)}g_{(e)(b)}-\Gamma^{(e)}{}_{(d)(b)}g_{(a)(e)}.$$
> Evaluating at $p$ and using $\Gamma(p)=0$ yields $\partial_{(d)}g_{(a)(b)}(p)=0$.

> [!danger] Remark
> So the metric and its first derivatives can be made to look exactly like special relativity at a point. What cannot be removed, in general, are the **second** derivatives. Those are curvature in disguise.

> [!abstract] Curvature is second-order information in normal coordinates
> In normal coordinates at $p$,
> $$R_{(a)(b)(c)(d)}(p)=\frac12\Bigl(\partial_{(c)}\partial_{(b)}g_{(a)(d)}+\partial_{(d)}\partial_{(a)}g_{(b)(c)}-\partial_{(d)}\partial_{(b)}g_{(a)(c)}-\partial_{(c)}\partial_{(a)}g_{(b)(d)}\Bigr)\Big|_{p}.$$
> In particular, $R(p)=0$ if and only if all second derivatives $\partial\partial g$ can be made to vanish at $p$.

> [!success] Proof
> Start from the coordinate formula
> $$R^\rho{}_{\sigma\mu\nu}=\partial_\mu\Gamma^\rho{}_{\nu\sigma}-\partial_\nu\Gamma^\rho{}_{\mu\sigma}+\Gamma^\rho{}_{\mu\lambda}\Gamma^\lambda{}_{\nu\sigma}-\Gamma^\rho{}_{\nu\lambda}\Gamma^\lambda{}_{\mu\sigma}.$$
> At $p$ in normal coordinates, $\Gamma(p)=0$, so the quadratic terms drop and
> $$R^\rho{}_{\sigma\mu\nu}(p)=\partial_\mu\Gamma^\rho{}_{\nu\sigma}(p)-\partial_\nu\Gamma^\rho{}_{\mu\sigma}(p).$$
> Now use the Levi-Civita formula
> $$\Gamma_{\alpha\beta\gamma}=\frac12\bigl(\partial_\beta g_{\alpha\gamma}+\partial_\gamma g_{\alpha\beta}-\partial_\alpha g_{\beta\gamma}\bigr),\qquad \Gamma^\rho{}_{\beta\gamma}=g^{\rho\alpha}\Gamma_{\alpha\beta\gamma},$$
> and differentiate once more. At $p$, $g^{\rho\alpha}(p)=\eta^{\rho\alpha}$ and $\partial g(p)=0$, so differentiating $\Gamma$ produces only second derivatives of $g$, yielding the stated identity after lowering indices.

This completes the pointwise version of “local inertial frames.”

## Fermi normal coordinates: local inertial frames along a freely falling observer

Normal coordinates at a point are good, but physics often rides along a worldline. A freely falling observer traces a timelike geodesic $\gamma(\tau)$, where $\tau$ is proper time, and we want a coordinate system that stays adapted to her at each instant.

> [!info] Fermi normal coordinates along a timelike geodesic
> Let $\gamma:I\to M$ be a future-directed timelike geodesic parametrized by proper time $\tau$. Choose an orthonormal frame $\{e_{(0)},e_{(1)},e_{(2)},e_{(3)}\}$ along $\gamma$ such that
> $$e_{(0)}=\dot\gamma,\qquad \nabla_{\dot\gamma}e_{(a)}=0 \quad \text{(parallel transport)}.$$
> For a point $q$ sufficiently close to $\gamma$, there is a unique $\tau$ such that $q$ lies on the spacelike geodesic emanating from $\gamma(\tau)$ with initial tangent $\xi=\xi^{(i)}e_{(i)}(\tau)$ orthogonal to $\dot\gamma(\tau)$. Define
> $$x^0(q)=\tau,\qquad (x^1(q),x^2(q),x^3(q))=(\xi^{(1)},\xi^{(2)},\xi^{(3)}).$$
> These $(x^\mu)$ are called **Fermi normal coordinates** based on $\gamma$.

> [!danger] Remark
> Geometrically: $x^0$ is literally the time on the observer's clock, and the spatial coordinates are obtained by pointing in a spatial direction in her instantaneous rest space and walking along the unique orthogonal spacelike geodesic for the required proper distance.

> [!abstract] Local Minkowski form on the worldline
> In Fermi normal coordinates based on a timelike geodesic $\gamma$, along the curve $\gamma$ (which is $x^i=0$) one has
> $$g_{\mu\nu}\big|_{\gamma}=\eta_{\mu\nu},\qquad \Gamma^\mu{}_{\nu\lambda}\big|_{\gamma}=0,\qquad \partial_\alpha g_{\mu\nu}\big|_{\gamma}=0.$$

> [!success] Proof
> By construction, $\partial_0$ along $\gamma$ is $\dot\gamma$ and $\partial_i$ along $\gamma$ are the parallel transported spatial frame vectors. Hence $g_{\mu\nu}|_\gamma=\eta_{\mu\nu}$.
>
> To see $\Gamma|_\gamma=0$, use the geodesics built into the coordinate system. First, $\gamma$ itself is $x^\mu(\tau)=(\tau,0,0,0)$, so the geodesic equation gives
> $$0=\frac{d^2 x^\mu}{d\tau^2}+\Gamma^\mu{}_{\nu\lambda}\frac{dx^\nu}{d\tau}\frac{dx^\lambda}{d\tau}=\Gamma^\mu{}_{00}\big|_\gamma.$$
> Second, for each fixed $\tau_0$ and spatial direction $n^i$, the curve $s\mapsto x^\mu(s)=(\tau_0, sn^1, sn^2, sn^3)$ is by definition a spacelike geodesic orthogonal to $\gamma$, so its geodesic equation at $s=0$ gives $\Gamma^\mu{}_{ij}\big|_\gamma n^i n^j=0$ for all $n$, hence $\Gamma^\mu{}_{ij}\big|_\gamma=0$.
>
> Finally, the frame $\partial_\alpha$ along $\gamma$ is parallel transported in the $\partial_0$ direction by construction, which implies $\Gamma^\mu{}_{0i}\big|_\gamma=0$ as well. Therefore all Christoffel symbols vanish on $\gamma$.
>
> Metric compatibility $\nabla g=0$ then yields $\partial_\alpha g_{\mu\nu}|_\gamma=0$ exactly as in the pointwise normal-coordinate proof.

> [!important] Why we insist that $\gamma$ is geodesic
> Along an **accelerated** worldline one cannot make all $\Gamma^\mu{}_{\nu\lambda}$ vanish on the curve. Acceleration is detectable locally (your accelerometer knows). Free fall is the special case where the connection can be made to disappear along the observer's path.

## Tidal forces as curvature: the theorem that replaces the slogan

We now make precise what “gravity cannot be transformed away” means.

> [!note] Geodesic deviation (Jacobi) equation
> Let $\Gamma:(-\varepsilon,\varepsilon)\times I\to M$ be a smooth variation through geodesics, so that for each fixed $s$, the curve $t\mapsto \Gamma(s,t)$ is an affinely parametrized geodesic. Let
> $$V=\partial_t\Gamma,\qquad J=\partial_s\Gamma$$
> be the tangent field and separation field along the central geodesic $\gamma(t)=\Gamma(0,t)$. Then along $\gamma$ one has the Jacobi equation
> $$\nabla_V\nabla_V J + R(J,V)V = 0.$$
> Equivalently, in components along $\gamma$,
> $$(\nabla_V\nabla_V J)^\mu = - R^\mu{}_{\nu\rho\sigma}\,V^\nu J^\rho V^\sigma.$$

> [!success] Proof
> Because $\Gamma$ is a smooth map of a rectangle, the coordinate vector fields commute:
> $$[\partial_s,\partial_t]=0 \quad \Longrightarrow \quad [J,V]=0.$$
> Using torsion-freeness of the Levi-Civita connection,
> $$\nabla_J V - \nabla_V J = [J,V]=0,\qquad\text{so}\qquad \nabla_J V = \nabla_V J.$$
> Now differentiate along $V$:
> $$\nabla_V\nabla_V J = \nabla_V\nabla_J V.$$
> Insert the curvature identity (with our convention)
> $$R(J,V)V = \nabla_J\nabla_V V - \nabla_V\nabla_J V - \nabla_{[J,V]}V.$$
> Since each $t\mapsto\Gamma(s,t)$ is a geodesic, $\nabla_V V=0$. Also $[J,V]=0$. Hence
> $$R(J,V)V = 0 - \nabla_V\nabla_J V - 0 = -\nabla_V\nabla_J V.$$
> But $\nabla_V\nabla_J V=\nabla_V\nabla_V J$ from above, so
> $$\nabla_V\nabla_V J + R(J,V)V = 0,$$
> as claimed.

This is the clean geometric statement. To translate it into the language of an observer, place it in Fermi normal coordinates.

> [!note] Tidal acceleration measured by a freely falling observer
> Let $\gamma(\tau)$ be a freely falling observer (a unit-speed timelike geodesic) and let $(x^\mu)$ be Fermi normal coordinates along $\gamma$, so that on $\gamma$ we have $\partial_0=\dot\gamma$ and $g_{\mu\nu}=\eta_{\mu\nu}$. Let $J$ be a separation vector between $\gamma$ and a nearby freely falling geodesic, chosen orthogonal to $\dot\gamma$ along $\gamma$ (so $J^0=0$ on $\gamma$). Then, along $\gamma$,
> $$\frac{d^2 J^i}{d\tau^2} = -\,R^i{}_{0j0}\,J^j.$$
> In particular, the symmetric matrix $R_{0i0j}$ is the **tidal tensor** measured in the observer's instantaneous rest frame.

> [!success] Proof
> Apply the Jacobi equation with $V=\dot\gamma=\partial_0$ and use that in Fermi normal coordinates on $\gamma$, Christoffel symbols vanish, so $\nabla_V\nabla_V J$ reduces to ordinary second derivatives of components at points of $\gamma$:
> $$(\nabla_V\nabla_V J)^i\big|_\gamma = \frac{d^2 J^i}{d\tau^2}.$$
> The curvature term is
> $$(R(J,V)V)^i = R^i{}_{\nu\rho\sigma}J^\nu V^\rho V^\sigma.$$
> On $\gamma$, $V^\rho=\delta^\rho{}_0$ and $J^\nu$ has only spatial components, so this becomes
> $$(R(J,V)V)^i\big|_\gamma = R^i{}_{j00}\,J^j = R^i{}_{0j0}\,J^j$$
> (using the usual index symmetries). Insert into $\nabla_V\nabla_V J + R(J,V)V=0$ to obtain the formula.

> [!danger] Remark
> A freely falling observer can choose coordinates so that **all first-order** gravitational effects disappear on her worldline. What remains is relative acceleration between neighboring free-fall worldlines, and the theorem says that relative acceleration is exactly curvature.

## Bonus: the second-order metric in Fermi coordinates (curvature shows up explicitly)

If one wants to see curvature not only in the motion of nearby geodesics but directly in the metric coefficients, Fermi coordinates provide a remarkably clean expansion.

> [!abstract] Second-order Fermi expansion
> In Fermi normal coordinates based on a timelike geodesic $\gamma$, the metric near $\gamma$ has the form
> $$g_{00} = -1 - R_{0i0j}\big|_\gamma\, x^i x^j + O(|x|^3),$$
> $$g_{0i} = \frac{2}{3} R_{0jki}\big|_\gamma\, x^j x^k + O(|x|^3),$$
> $$g_{ij} = \delta_{ij} - \frac{1}{3}\bigl(R_{ikjl}+R_{iljk}\bigr)\big|_\gamma\, x^k x^l + O(|x|^3),$$
> where $|x|^2=(x^1)^2+(x^2)^2+(x^3)^2$, and the curvature components are evaluated on the central geodesic at the same value of $x^0$.

> [!success] Proof
> We sketch a complete derivation at the level needed later for physical applications.
>
> From the previous proposition, $\Gamma^\mu{}_{\nu\lambda}|_\gamma=0$ and hence along $\gamma$ the curvature reduces to
> $$R^\mu{}_{\nu\rho\lambda}\big|_\gamma=\bigl(\partial_\rho\Gamma^\mu{}_{\lambda\nu}-\partial_\lambda\Gamma^\mu{}_{\rho\nu}\bigr)\big|_\gamma.$$
> One then uses the geodesics defining the coordinate system to determine the first derivatives $\partial_\rho\Gamma^\mu{}_{\nu\lambda}|_\gamma$ in terms of $R^\mu{}_{\nu\rho\lambda}|_\gamma$ (by cycling indices and using the algebraic symmetries and Bianchi identity), which yields explicit expressions for $\Gamma_{\mu\nu\lambda,\rho}|_\gamma$.
>
> Finally, use metric compatibility in coordinates:
> $$\partial_\rho g_{\mu\nu}=\Gamma_{\mu\nu\rho}+\Gamma_{\nu\mu\rho},\qquad \Gamma_{\mu\nu\rho}=g_{\mu\alpha}\Gamma^\alpha{}_{\nu\rho}.$$
> Along $\gamma$, $g_{\mu\nu}=\eta_{\mu\nu}$ and $\Gamma=0$, hence $\partial_\rho g_{\mu\nu}|_\gamma=0$. Differentiate once more and substitute the already-determined $\Gamma_{\,\cdot,\cdot}|_\gamma$ to obtain $g_{\mu\nu,\rho\lambda}|_\gamma$ expressed in curvature components. Taylor expanding the metric about $x^i=0$ at fixed $x^0$ gives precisely the stated quadratic terms.

> [!danger] Remark
> The key structural message is independent of coefficients: there are no linear terms in $x^i$ (local inertial frame), and the first nontrivial terms are quadratic and proportional to curvature (tidal physics).
