+++
date = "2025-02-24T15:44:10-04:00"
draft = false
title = "Accelerated Observers and the Rindler Wedge: A Prelude to the Equivalence Principle"
categories = [ "Math", "Others" ]
ShowToc = true
tags = [ "General Relativity", "Differential Geometry" ]
+++

In the previous lectures, inertial observers were the main characters: straight worldlines, constant 4-velocity, and the comfort of global Minkowski coordinates. Today we do something slightly mischievous: we keep spacetime **flat**, but we insist on describing it using the clocks and rulers naturally carried by **accelerated** observers. Flat space, nontrivial physics.

Throughout, we work in signature $(-,+,+,+)$ and set $c=1$.

## Proper acceleration and hyperbolic motion

Let $(\mathbb{R}^4,\eta)$ be Minkowski spacetime with inertial coordinates $(t,x,y,z)$ and
$$\eta = -dt^2 + dx^2 + dy^2 + dz^2.$$

> [!info] 4-velocity, 4-acceleration, proper acceleration
> A future-pointing timelike worldline $\gamma(\tau)$ parametrized by proper time $\tau$ has 4-velocity
> $$u^a := \frac{d\gamma^a}{d\tau},\qquad \text{so that } \eta_{ab}u^a u^b = -1.$$
> Its 4-acceleration is
> $$a^a := \frac{du^a}{d\tau}.$$
> The **proper acceleration** is the Lorentz-invariant magnitude
> $$\alpha := \sqrt{\eta_{ab}a^a a^b}\ \ge 0.$$

> [!note] Orthogonality of velocity and acceleration
> Along any timelike worldline parametrized by proper time, one has $\eta(u,a)=0$.

> [!success] Proof
> Differentiate $\eta(u,u)=-1$ with respect to $\tau$:
> $$0=\frac{d}{d\tau}\,\eta(u,u)=2\,\eta\!\left(\frac{du}{d\tau},u\right)=2\,\eta(a,u).$$

Uniform proper acceleration is the cleanest “acceleration” to study because it is geometric.

> [!abstract] Hyperbolic worldlines for constant proper acceleration
> Consider motion in the $(t,x)$-plane with $y=z=0$. If $\alpha\equiv g>0$ is constant and $\gamma$ is future-pointing, then (after choosing origin appropriately) the worldline can be written as
> $$t(\tau)=\frac{1}{g}\sinh(g\tau),\qquad x(\tau)=\frac{1}{g}\cosh(g\tau),$$
> and hence satisfies the hyperbola equation
> $$x^2-t^2=\frac{1}{g^2}.$$

> [!success] Proof
> Let $u^a=(\dot t,\dot x,0,0)$ with dots denoting $d/d\tau$. The normalization $\eta(u,u)=-1$ gives
> $$-\dot t^{\,2}+\dot x^{\,2}=-1.$$
> Since $\dot t>0$, we may parametrize
> $$\dot t=\cosh\theta(\tau),\qquad \dot x=\sinh\theta(\tau)$$
> for a smooth rapidity function $\theta$. Then
> $$a^a=(\ddot t,\ddot x,0,0)=\theta'(\tau)\,(\sinh\theta,\cosh\theta,0,0),$$
> so
> $$\eta(a,a)=-(\theta')^2\sinh^2\theta+(\theta')^2\cosh^2\theta=(\theta')^2.$$
> Thus $\alpha=\sqrt{\eta(a,a)}=|\theta'|$. If $\alpha\equiv g$, then (choosing orientation) $\theta'(\tau)=g$ and hence $\theta(\tau)=g\tau+\theta_0$. A shift of $\tau$ removes $\theta_0$. Integrating $\dot t=\cosh(g\tau)$ and $\dot x=\sinh(g\tau)$ yields the stated formulas (choosing additive constants so that $t(0)=0$ and $x(0)=1/g$). The hyperbola identity follows immediately.

So: constant **proper** acceleration draws hyperbolas. These hyperbolas will shortly be reinterpreted as “observers at rest” in a non-inertial coordinate system.

## Rindler coordinates: flat space written for accelerated observers

The hyperbola $x^2-t^2=\rho^2$ suggests a coordinate system adapted to boosts.

> [!info] Right wedge
> The **right Rindler wedge** is the open region
> $$\mathcal{W}_R:=\{(t,x,y,z)\in\mathbb{R}^4:\ x>|t|\}.$$

> [!info] Rindler coordinates on $\mathcal{W}_R$
> Define coordinates $(\eta,\rho,y,z)$ on $\mathcal{W}_R$ by
> $$t=\rho\sinh\eta,\qquad x=\rho\cosh\eta,\qquad \rho>0,\ \eta\in\mathbb{R},$$
> with $(y,z)$ unchanged.

Geometrically, $\eta$ is a boost parameter (a rapidity), while $\rho$ labels the hyperbola.

> [!abstract] Minkowski metric in Rindler form
> On $\mathcal{W}_R$, the Minkowski metric becomes
> $$ds^2 = -\rho^2\,d\eta^2 + d\rho^2 + dy^2 + dz^2.$$

> [!success] Proof
> Compute differentials:
> $$dt=\sinh\eta\,d\rho+\rho\cosh\eta\,d\eta,\qquad dx=\cosh\eta\,d\rho+\rho\sinh\eta\,d\eta.$$
> Then
> $$-dt^2+dx^2=-(\sinh\eta\,d\rho+\rho\cosh\eta\,d\eta)^2+(\cosh\eta\,d\rho+\rho\sinh\eta\,d\eta)^2.$$
> $$= (\cosh^2\eta-\sinh^2\eta)\,d\rho^2 - \rho^2(\cosh^2\eta-\sinh^2\eta)\,d\eta^2.$$
> $$= d\rho^2-\rho^2 d\eta^2.$$
> Add $dy^2+dz^2$.

> [!danger] Two immediate morals
> 1. The metric **looks** position-dependent, but spacetime is still flat: we have merely changed coordinates.
> 2. The coordinate vector field $\partial_\eta$ is Killing; it is the generator of Lorentz boosts in the $(t,x)$-plane. Thus “time translation” in Rindler time is really “boosting.”

## Observers at rest in Rindler coordinates: who are they?

In inertial coordinates, “at rest” means $x,y,z$ constant. In Rindler coordinates, “at rest” means $\rho,y,z$ constant.

> [!info] Rindler static observers
> A **Rindler static observer** is a worldline with $\rho=\rho_0>0$, $y=y_0$, $z=z_0$ constant and $\eta$ increasing.

Along such a worldline, the line element reduces to $ds^2=-\rho_0^{\,2}\,d\eta^2$, so proper time satisfies
$$d\tau=\rho_0\,d\eta,\qquad\text{i.e.}\qquad \eta=\frac{\tau}{\rho_0}+ \text{constant}.$$

> [!abstract] Proper acceleration
> A Rindler static observer at $\rho=\rho_0$ has constant proper acceleration
> $$\alpha=\frac{1}{\rho_0}.$$
> Equivalently, smaller $\rho_0$ means larger proper acceleration; these observers “hover closer” to the null boundary $x=|t|$.

> [!success] Proof
> In inertial coordinates, the worldline is
> $$t(\eta)=\rho_0\sinh\eta,\qquad x(\eta)=\rho_0\cosh\eta.$$
> Reparametrize by proper time $\tau=\rho_0\eta$:
> $$t(\tau)=\rho_0\sinh(\tau/\rho_0),\qquad x(\tau)=\rho_0\cosh(\tau/\rho_0).$$
> Comparing with the hyperbolic-motion formula in the previous proposition gives $g=1/\rho_0$, hence $\alpha=g=1/\rho_0$.

This is the first hint of the “gravitational” interpretation: in a Rindler lab, the observer at smaller $\rho$ must work harder (larger proper acceleration) to remain “at rest,” just like having to push harder to stay at fixed height in a gravitational field.

## The Rindler horizon: a causal blind spot in flat spacetime

The map $(\eta,\rho)\mapsto (t,x)$ does **not** cover all of Minkowski space. The boundary $x=|t|$ behaves like a horizon for Rindler observers.

A clean way to see this is to use inertial null coordinates $U=t-x$ and $V=t+x$. In the wedge $\mathcal{W}_R$, one computes
$$U=t-x=\rho(\sinh\eta-\cosh\eta)=-\rho e^{-\eta}<0,\qquad V=t+x=\rho(\sinh\eta+\cosh\eta)=\rho e^{\eta}>0.$$
Thus $\mathcal{W}_R$ corresponds exactly to the quadrant $\{U<0,\ V>0\}$.

> [!abstract] No signals from beyond the horizon
> Fix a Rindler static observer (so $\rho=\rho_0$). Any future-directed null ray that reaches this observer must lie in $\overline{\mathcal{W}_R}$; in particular, events with $U>0$ (the left wedge and part of the future wedge) can never send a light signal to the observer.

> [!success] Proof
> A future-directed null ray in Minkowski has either $U=\text{constant}$ (right-moving) or $V=\text{constant}$ (left-moving). Along the observer, we have $U(\eta)=-\rho_0 e^{-\eta}<0$ for all $\eta$, so the observer never meets a null ray with $U>0$. Hence no event with $U>0$ can be connected to the observer by a future-directed null segment.

> [!danger] Remark
> This “horizon” is not produced by gravity in the sense of spacetime curvature. It is produced by insisting that your coordinate time be the proper time of accelerated observers. Flat spacetime can hide regions from you if you accelerate forever.

## Redshift in an accelerating laboratory: Doppler outside, gravity inside

Now for the Zee-style thought experiment that earns its keep.

Imagine a rocket in deep space accelerating “upward.” Someone at the floor fires a laser pulse to a detector at the ceiling. An inertial observer outside says: the light travels straight, but the ceiling is speeding up while the pulse is in flight, so by the time it is absorbed the detector is moving away from the pulse: **Doppler redshift**. The person inside the rocket says: I am in a gravitational field; the light climbed upward and **lost frequency**: **gravitational redshift**. Same phenomenon, two interpretations.

Let us compute it in a way that is both geometric and efficient.

> [!info] Stationary observers and their measured frequency
> In a spacetime region with a timelike Killing field $K^a$, a **stationary observer** is an integral curve of $K$ with 4-velocity
> $$u^a = \frac{K^a}{\sqrt{-\,\eta_{bc}K^b K^c}}.$$
> Given a future-directed null geodesic with tangent $k^a$, the frequency measured by $u$ is
> $$\nu := -\,\eta_{ab}k^a u^b.$$

In the Rindler wedge, the relevant Killing field is $K=\partial_\eta$. From the metric $ds^2=-\rho^2 d\eta^2+\cdots$, we have
$$\eta(K,K)=g_{\eta\eta}=-\rho^2,\qquad \sqrt{-\eta(K,K)}=\rho,\qquad\text{so}\qquad u=\frac{1}{\rho}\,\partial_\eta.$$

> [!note] Conserved quantity along null geodesics
> Along any affinely parametrized null geodesic with tangent $k^a$ in $\mathcal{W}_R$, the quantity
> $$E := -\,\eta_{ab}k^a K^b$$
> is constant.

> [!success] Proof
> This is the standard Killing conservation law: along a geodesic,
> $$\frac{d}{d\lambda}\bigl(\eta(k,K)\bigr)=\eta(\nabla_k k,K)+\eta(k,\nabla_k K).$$
> The first term vanishes for affinely parametrized geodesics. The second vanishes because $\nabla_{(a}K_{b)}=0$ (Killing), hence $\eta(k,\nabla_k K)=k^a k^b \nabla_{(a}K_{b)}=0$.

> [!abstract] Rindler redshift formula
> Let a light ray propagate within $\mathcal{W}_R$ and be measured by two Rindler static observers at $\rho=\rho_{\mathrm{em}}$ (emission) and $\rho=\rho_{\mathrm{rec}}$ (reception). Then
> $$\frac{\nu_{\mathrm{rec}}}{\nu_{\mathrm{em}}}=\frac{\rho_{\mathrm{em}}}{\rho_{\mathrm{rec}}}.$$
> In particular, if $\rho_{\mathrm{rec}}>\rho_{\mathrm{em}}$ (the receiver is “higher”), then $\nu_{\mathrm{rec}}<\nu_{\mathrm{em}}$ (redshift).

> [!success] Proof
> Using $u=(1/\rho)\partial_\eta$ and $E=-\eta(k,\partial_\eta)$, we obtain
> $$\nu=-\eta(k,u)= -\eta\!\left(k,\frac{1}{\rho}\partial_\eta\right)=\frac{1}{\rho}\,\bigl(-\eta(k,\partial_\eta)\bigr)=\frac{E}{\rho}.$$
> Since $E$ is constant along the ray, the ratio of measured frequencies is $\nu_{\mathrm{rec}}/\nu_{\mathrm{em}}=\rho_{\mathrm{em}}/\rho_{\mathrm{rec}}$.

> [!danger] Weak-field form: the freshman-physics limit
> Fix a reference observer at $\rho=\rho_0$ with proper acceleration $g=1/\rho_0$. For observers separated by a small height $h$ with $\rho=\rho_0+h$ and $|h|\ll \rho_0$, we have
> $$\frac{\nu(\rho_0+h)}{\nu(\rho_0)}=\frac{\rho_0}{\rho_0+h}=1-\frac{h}{\rho_0}+O\!\left(\frac{h^2}{\rho_0^2}\right)=1-gh+O(g^2h^2).$$
> This is the infinitesimal redshift law one expects for a uniform gravitational field of strength $g$.

## A “gravitational field” made out of coordinates

If we insist on treating $(\eta,\rho,y,z)$ as our coordinates, then a particle at fixed $\rho$ is not inertial: it has nonzero proper acceleration $1/\rho$. In that sense, the chart manufactures a “downward pull.”

Even without discussing curvature yet, we can already see the inertial forces directly from the Christoffel symbols of the Rindler form of the flat metric.

> [!abstract] Nonzero Christoffel symbols in the $(\eta,\rho)$ sector
> For the 2D metric $ds^2=-\rho^2 d\eta^2+d\rho^2$, the only nonzero Christoffel symbols are
> $$\Gamma^{\rho}_{\eta\eta}=\rho,\qquad \Gamma^{\eta}_{\eta\rho}=\Gamma^{\eta}_{\rho\eta}=\frac{1}{\rho}.$$

> [!success] Proof
> From $g_{\eta\eta}=-\rho^2$ and $g_{\rho\rho}=1$, we have $\partial_\rho g_{\eta\eta}=-2\rho$ and all other relevant derivatives zero. Using
> $$\Gamma^{\lambda}_{\mu\nu}=\frac{1}{2}g^{\lambda\sigma}\bigl(\partial_\mu g_{\nu\sigma}+\partial_\nu g_{\mu\sigma}-\partial_\sigma g_{\mu\nu}\bigr),$$
> one finds
> $$\Gamma^\rho_{\eta\eta}=\frac{1}{2}g^{\rho\rho}\bigl(-\partial_\rho g_{\eta\eta}\bigr)=\frac{1}{2}(2\rho)=\rho,$$
> $$\Gamma^\eta_{\eta\rho}=\frac{1}{2}g^{\eta\eta}\partial_\rho g_{\eta\eta}=\frac{1}{2}\Bigl(-\frac{1}{\rho^2}\Bigr)(-2\rho)=\frac{1}{\rho}.$$
> Symmetry gives $\Gamma^\eta_{\rho\eta}=\Gamma^\eta_{\eta\rho}$.

> [!danger] Remark
> In Part II we will formalize: “gravity is removable at a point (or along a worldline) but tidal effects are not.” Rindler space is the toy model where **everything** is removable because the underlying spacetime is flat. Nonetheless, it already teaches you what it feels like when your coordinates insist on being accelerated.