+++
date = "2025-01-26T15:44:10-04:00"
draft = false
title = "Hamiltonian Dynamics on Symplectic Manifolds"
categories = "Math"
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

Throughout this chapter, $(M,\omega)$ denotes a symplectic manifold of dimension $2n$.

## 4.1 Hamiltonian and symplectic vector fields

We now turn from static symplectic manifolds to dynamical systems defined on them.

> [!info] Definition (Hamiltonian vector field)
> Let $(M,\omega)$ be symplectic and $H\in C^\infty(M)$ a smooth function, called a **Hamiltonian**.  
> The **Hamiltonian vector field** $X_H$ associated to $H$ is the unique vector field on $M$ satisfying
> $$\iota_{X_H}\omega = dH.$$
> Equivalently,
> $$\omega(X_H,\cdot) = dH(\cdot).$$
> Existence and uniqueness follow from the nondegeneracy of $\omega$.

Given $X_H$, its flow $\varphi_t^H$ (where defined) solves
$$\frac{d}{dt}\varphi_t^H(x)=X_H(\varphi_t^H(x)),\quad \varphi_0^H=\mathrm{id}_M.$$

> [!abstract] Proposition 4.1 (Hamiltonian flows preserve $\omega$)
> Let $X_H$ be the Hamiltonian vector field of $H$, and $\varphi_t^H$ its flow (assumed to exist on some interval). Then
> $$\big(\varphi_t^H\big)^*\omega = \omega \quad \text{for all }t.$$

> [!success] Proof
> Consider $\rho_t := \varphi_t^H$. Using Cartan’s formula and $d\omega=0$,
> $$\frac{d}{dt}\rho_t^*\omega = \rho_t^*\big(\mathcal{L}_{X_H}\omega\big) = \rho_t^*\big(d(\iota_{X_H}\omega) + \iota_{X_H}d\omega\big) = \rho_t^*(d\,dH + 0) = 0.$$
> Thus $\rho_t^*\omega$ is constant in $t$; at $t=0$, $\rho_0=\mathrm{id}$, so $\rho_0^*\omega=\omega$. Hence $\rho_t^*\omega=\omega$ for all $t$.

This motivates a broader notion.

> [!info] Definition (symplectic vector field)
> A vector field $X\in\mathfrak{X}(M)$ is **symplectic** if its flow $\rho_t$ preserves $\omega$, i.e.
> $$\rho_t^*\omega = \omega \quad\text{for all }t,$$
> or equivalently if
> $$\mathcal{L}_X\omega = 0.$$

> [!abstract] Proposition 4.2 (Characterizations of symplectic and Hamiltonian fields)
> Let $(M,\omega)$ be symplectic and $X\in\mathfrak{X}(M)$.
> 1. The following are equivalent:
>    - $X$ is symplectic (its flow preserves $\omega$);
>    - $\mathcal{L}_X\omega = 0$;
>    - $d(\iota_X\omega) = 0$, i.e. $\iota_X\omega$ is a closed 1-form.
> 2. $X$ is Hamiltonian if and only if $\iota_X\omega$ is exact:
>    $$\iota_X\omega = dH \quad\text{for some }H\in C^\infty(M).$$

> [!success] Proof
> (1) The equivalence between “flow preserves $\omega$” and $\mathcal{L}_X\omega=0$ is standard. Cartan’s formula gives
> $$\mathcal{L}_X\omega = d(\iota_X\omega) + \iota_X(d\omega) = d(\iota_X\omega),$$
> since $d\omega=0$. Thus $\mathcal{L}_X\omega=0$ iff $d(\iota_X\omega)=0$.  
> (2) By definition, $X$ is Hamiltonian with Hamiltonian $H$ iff $\iota_X\omega=dH$.

Thus we have inclusions of Lie algebras
$$
  \mathfrak{X}_{\mathrm{ham}}(M)
  \subset
  \mathfrak{X}_{\mathrm{sympl}}(M)
  \subset
  \mathfrak{X}(M),
$$
where $\mathfrak{X}_{\mathrm{ham}}$ denotes Hamiltonian vector fields and $\mathfrak{X}_{\mathrm{sympl}}$ symplectic ones.

> [!abstract] Proposition 4.3 (Symplectic vs Hamiltonian; role of $H^1$)
> Let $(M,\omega)$ be symplectic.
> 1. Every Hamiltonian vector field is symplectic.
> 2. On any contractible open set $U\subset M$, every symplectic vector field is Hamiltonian.
> 3. If $H^1_{\mathrm{dR}}(M)=0$, then every symplectic vector field on $M$ is Hamiltonian.
> 4. In general, $H^1_{\mathrm{dR}}(M)$ measures the obstruction for a symplectic vector field to be Hamiltonian.

> [!success] Proof
> (1) If $X_H$ is Hamiltonian then $\iota_{X_H}\omega=dH$ is exact, hence closed, so $X_H$ is symplectic by Proposition 4.2.  
> (2) On a contractible open set $U$ we have $H^1_{\mathrm{dR}}(U)=0$, so any closed 1-form is exact; thus $\iota_X\omega$ is exact for a symplectic $X$.  
> (3) If $H^1_{\mathrm{dR}}(M)=0$, the same reasoning applies globally.  
> (4) In general, $\iota_X\omega$ is a closed 1-form whose cohomology class vanishes iff $X$ is Hamiltonian.

> [!example] Example 4.4 (Symplectic but non-Hamiltonian vector fields on a torus)
> On $T^2 = \mathbb{R}^2/\mathbb{Z}^2$ with coordinates $(\theta_1,\theta_2)$ and symplectic form $\omega = d\theta_1\wedge d\theta_2$, the vector fields
> $$X_1 = \frac{\partial}{\partial \theta_1}, \qquad X_2 = \frac{\partial}{\partial \theta_2}$$
> satisfy $\mathcal{L}_{X_i}\omega = 0$, so they are symplectic, but the 1-forms $\iota_{X_1}\omega = d\theta_2$, $\iota_{X_2}\omega = -d\theta_1$ are not exact on $T^2$ (they represent nonzero classes in $H^1(T^2;\mathbb{R})$). Thus $X_1$ and $X_2$ are **not** Hamiltonian.

## 4.2 Hamilton’s equations and Poisson brackets

### 4.2.1 Hamilton’s equations in coordinates

Let $(\mathbb{R}^{2n},\omega_0)$ be the standard symplectic vector space with coordinates $(q_1,\dots,q_n,p_1,\dots,p_n)$ and
$$
  \omega_0 = \sum_{j=1}^n dq_j\wedge dp_j.
$$

> [!abstract] Proposition 4.5 (Coordinate expression of $X_H$)
> Let $H\in C^\infty(\mathbb{R}^{2n})$. The Hamiltonian vector field $X_H$ on $(\mathbb{R}^{2n},\omega_0)$ is
> $$X_H = \sum_{j=1}^n \frac{\partial H}{\partial p_j}\frac{\partial}{\partial q_j} - \frac{\partial H}{\partial q_j}\frac{\partial}{\partial p_j}.$$
> Hence the integral curves $\gamma(t)=(q(t),p(t))$ of $X_H$ satisfy **Hamilton’s equations**
> $$\dot{q}_j = \frac{\partial H}{\partial p_j},\qquad \dot{p}_j = -\frac{\partial H}{\partial q_j},\quad j=1,\dots,n.$$

> [!success] Proof
> We want a vector field
> $$X_H = \sum_j a_j\frac{\partial}{\partial q_j} + \sum_j b_j\frac{\partial}{\partial p_j}$$
> such that $\iota_{X_H}\omega_0 = dH$. Compute:
> $$\iota_{X_H}\omega_0 = \iota_{X_H}\Big(\sum_j dq_j\wedge dp_j\Big) = \sum_j\big(a_j\,dp_j - b_j\,dq_j\big).$$
> On the other hand,
> $$dH = \sum_j \frac{\partial H}{\partial q_j}dq_j + \sum_j \frac{\partial H}{\partial p_j}dp_j.$$
> Equating coefficients gives
> $$a_j = \frac{\partial H}{\partial p_j},\qquad -b_j = \frac{\partial H}{\partial q_j},$$
> hence the formula for $X_H$ and the differential equations for the integral curves.

These are the familiar Hamilton equations of classical mechanics.

### 4.2.2 Energy conservation and first integrals

> [!abstract] Proposition 4.6 (Energy conservation)
> Let $H\in C^\infty(M)$ and $X_H$ be its Hamiltonian vector field. Then $H$ is constant along the flow lines of $X_H$. Equivalently,
> $$X_H(H) = 0.$$

> [!success] Proof
> By definition,
> $$X_H(H) = dH(X_H) = \big(\iota_{X_H}\omega\big)(X_H) = \omega(X_H,X_H)=0$$
> since $\omega$ is skew-symmetric. Along a trajectory $\gamma(t)$ of $X_H$,
> $$\frac{d}{dt}H(\gamma(t)) = dH\big(\dot{\gamma}(t)\big) = dH\big(X_H(\gamma(t))\big) = X_H(H)(\gamma(t)) = 0,$$
> hence $H(\gamma(t))$ is constant in $t$.

More generally, other functions may be constant along the flow of $H$.

> [!info] Definition (first integral / constant of motion)
> A function $F\in C^\infty(M)$ is a **first integral** or **constant of motion** for the Hamiltonian $H$ if it is constant along the trajectories of $X_H$, i.e.
> $$X_H(F) = 0.$$

We will rephrase this using the Poisson bracket.

### 4.2.3 Poisson bracket

> [!info] Definition (Poisson bracket)
> Let $(M,\omega)$ be symplectic. For functions $F,G\in C^\infty(M)$, define their **Poisson bracket**
> $$\{F,G\} := \omega(X_F,X_G) = dF(X_G) = -\,dG(X_F).$$

> [!abstract] Proposition 4.7 (Poisson bracket and Hamiltonian flows)
> Let $F,H\in C^\infty(M)$. Then
> $$X_H(F) = \{F,H\}.$$
> In particular, $F$ is a first integral for $H$ if and only if
> $$\{F,H\}=0.$$

> [!success] Proof
> By definition,
> $$X_H(F) = dF(X_H).$$
> Using symmetry of the definition of the Poisson bracket,
> $$\{F,H\} = dF(X_H) = X_H(F).$$
> Thus $F$ is constant along the flow of $X_H$ iff $X_H(F)=0$, i.e. iff $\{F,H\}=0$.

> [!danger] Remark 4.8
> Thinking of observables as functions, the Poisson bracket measures the “rate of change of $F$ along the flow of $H$”. The condition $\{F,H\}=0$ says that $F$ and $H$ “commute” in the Poisson sense.

### 4.2.4 Poisson algebra and Lie algebra of functions

> [!abstract] Proposition 4.9 (Basic identities)
> For all $F,G,H\in C^\infty(M)$, the Poisson bracket satisfies:
> 1. Bilinearity:
>    $$\{aF+bG,H\}=a\{F,H\}+b\{G,H\},\quad a,b\in\mathbb{R}.$$
> 2. Skew-symmetry:
>    $$\{F,G\} = -\{G,F\}.$$
> 3. Leibniz rule:
>    $$\{F,GH\} = \{F,G\}H + G\{F,H\}.$$

> [!success] Proof
> Bilinearity and skew-symmetry follow directly from the bilinearity and skew-symmetry of $\omega$. For the Leibniz rule:
> $$X_F(GH) = d(GH)(X_F) = G\,dH(X_F) + H\,dG(X_F) = G\{H,F\} + H\{G,F\}.$$
> Using skew-symmetry $\{F,G\}=-\{G,F\}$ gives
> $$\{F,GH\} = X_{GH}(F) = G\{F,H\} + H\{F,G\}.$$
> Renaming variables yields the stated Leibniz rule.

The Jacobi identity is more subtle.

> [!note] Theorem 4.10 (Jacobi identity)
> For all $F,G,H\in C^\infty(M)$,
> $$\{F,\{G,H\}\} + \{G,\{H,F\}\} + \{H,\{F,G\}\} = 0.$$
> Thus $(C^\infty(M),\{\cdot,\cdot\})$ is a Lie algebra.

> [!success] Proof (idea)
> One approach is to use Darboux coordinates and reduce to the standard symplectic structure on $\mathbb{R}^{2n}$, where the Poisson bracket has the coordinate formula
> $$\{F,G\} = \sum_{j=1}^n \left( \frac{\partial F}{\partial q_j}\frac{\partial G}{\partial p_j} -\frac{\partial F}{\partial p_j}\frac{\partial G}{\partial q_j} \right),$$
> and verify the Jacobi identity by direct computation. This works because the Jacobiator $\{F,\{G,H\}\}+\cdots$ is a local expression involving derivatives of the functions and the coefficients of $\omega$, so if it vanishes in Darboux coordinates it vanishes globally.

> [!info] Definition (Poisson algebra)
> A **Poisson algebra** $(P,\{\cdot,\cdot\})$ is a commutative associative algebra $P$ with a Lie bracket $\{\cdot,\cdot\}$ such that the Leibniz rule holds:
> $$\{F,GH\} = \{F,G\}H + G\{F,H\}.$$
> Thus $(C^\infty(M),\{\cdot,\cdot\})$ is a Poisson algebra.

The Lie theory fits perfectly with Hamiltonian vector fields.

> [!abstract] Proposition 4.11 (Lie algebra anti-homomorphism)
> The map
> $$C^\infty(M) \longrightarrow \mathfrak{X}_{\mathrm{ham}}(M), \quad H \longmapsto X_H$$
> is a Lie algebra anti-homomorphism:
> $$[X_F,X_G] = -X_{\{F,G\}}.$$

> [!success] Proof
> Compute:
> $$\iota_{[X_F,X_G]}\omega = \mathcal{L}_{X_F}(\iota_{X_G}\omega) - \iota_{X_G}(\mathcal{L}_{X_F}\omega) = \mathcal{L}_{X_F}(dG) - \iota_{X_G}(d(\iota_{X_F}\omega)).$$
> Using $\mathcal{L}_{X_F}d = d\mathcal{L}_{X_F}$ and $\iota_{X_F}\omega=dF$, this becomes
> $$\iota_{[X_F,X_G]}\omega = d(X_F(G)) - \iota_{X_G}(d^2F) = d\{G,F\} = -d\{F,G\}.$$
> Hence $[X_F,X_G]$ is Hamiltonian with Hamiltonian $-\{F,G\}$, proving the claim.

## 4.3 Classical mechanics on $\mathbb{R}^{2n}$ and cotangent bundles

### 4.3.1 Phase space and mechanical Hamiltonians

In classical mechanics, the **phase space** of a particle moving on a configuration manifold $Q$ is the cotangent bundle $T^*Q$ with its canonical symplectic form $\omega_{\mathrm{can}}$ (Chapter 2). For $Q=\mathbb{R}^n$, we identify $T^*Q\cong\mathbb{R}^{2n}$ with coordinates $(q,p)$.

A standard class of Hamiltonians is of the form
$$
  H(q,p) = T(p) + V(q),
$$
where $T$ is the kinetic energy (typically quadratic in $p$) and $V$ is the potential energy.

> [!example] Example 4.12 (Free particle in $\mathbb{R}^n$)
> Let
> $$H(q,p) = \frac{1}{2m}\sum_{j=1}^n p_j^2$$
> on $(\mathbb{R}^{2n},\omega_

> $$\dot{q}_j = \frac{\partial H}{\partial p_j} = \frac{1}{m}p_j,\qquad \dot{p}_j = -\frac{\partial H}{\partial q_j} = 0.$$
> Thus $p_j(t)\equiv p_j(0)$ and $q_j(t) = q_j(0) + \frac{t}{m}p_j(0)$, i.e. straight-line motion with constant velocity.

> [!example] Example 4.13 (Harmonic oscillator)
> Consider the 1-dimensional harmonic oscillator with mass $m>0$ and spring constant $k>0$:
> $$H(q,p) = \frac{p^2}{2m} + \frac{k q^2}{2}.$$
> Then
> $$\dot{q} = \frac{p}{m},\qquad \dot{p} = -kq.$$
> Differentiating $\dot{q} = p/m$ gives $\ddot{q} = \dot{p}/m = -(k/m)q$, i.e.
> $$\ddot{q} + \omega^2 q = 0,\qquad \omega := \sqrt{k/m},$$
> whose solutions are
> $$q(t) = A\cos(\omega t) + B\sin(\omega t),\qquad p(t) = m\dot{q}(t).$$
> The phase portrait consists of ellipses $H(q,p)=\text{const}$, each corresponding to a periodic orbit.

> [!example] Example 4.14 (Central force and angular momentum)
> Let $Q=\mathbb{R}^3\setminus\{0\}$ with coordinates $q=(q_1,q_2,q_3)$, and consider a central potential $V(|q|)$. The Hamiltonian is
> $$H(q,p) = \frac{1}{2m}|p|^2 + V(|q|).$$
> Define the **angular momentum vector**
> $$L = q\times p \in \mathbb{R}^3,$$
> whose components $L_i$ can be viewed as functions on $T^*Q$. A standard computation shows that each $L_i$ is a constant of motion:
> $$\{L_i,H\} = 0,$$
> expressing conservation of angular momentum for central forces. Moreover, the Poisson brackets of $L_1,L_2,L_3$ satisfy
> $$\{L_i,L_j\} = \sum_k \varepsilon_{ijk} L_k,$$
> so the angular momentum functions form a copy of the Lie algebra $\mathfrak{so}(3)$ inside $C^\infty(T^*Q)$.

### 4.3.2 Lifts of vector fields and geodesic flows

For a Riemannian manifold $(Q,g)$, the geodesic flow is naturally Hamiltonian on $T^*Q$.

Let $\lambda$ be the tautological 1-form on $T^*Q$, $\omega_{\mathrm{can}}=-d\lambda$ the canonical symplectic form (Chapter 2), and $H:T^*Q\to\mathbb{R}$ the kinetic energy
$$
  H(x,\xi) = \frac{1}{2}g_x^\sharp(\xi,\xi),
$$
where $g_x^\sharp:T_x^*Q\to T_xQ$ is the musical isomorphism induced by $g$.

> [!abstract] Proposition 4.15 (Geodesic flow as Hamiltonian flow)
> The Hamiltonian vector field $X_H$ on $(T^*Q,\omega_{\mathrm{can}})$ with Hamiltonian $H$ is the lift of the geodesic flow of $(Q,g)$. In particular, its projection to $Q$ is the usual geodesic flow, and its trajectories in $T^*Q$ encode geodesics with their momenta.

The proof is a matter of writing everything in local coordinates and comparing the Hamilton equations with the geodesic equation involving the Christoffel symbols of $g$.

## 4.4 Symmetries and conserved quantities (Noether-type results)

We now formalize the relation between symmetries and first integrals.

### 4.4.1 Symplectic and Hamiltonian symmetries

> [!info] Definition (symplectic and Hamiltonian symmetries)
> Let $(M,\omega)$ be symplectic.
> - A **symplectic symmetry** of a Hamiltonian system $(M,\omega,H)$ is a symplectomorphism $\psi\in\mathrm{Symp}(M,\omega)$ such that $H\circ\psi = H$.
> - An infinitesimal symmetry is a vector field $Y$ such that
>   $$\mathcal{L}_Y\omega = 0,\qquad \mathcal{L}_Y H = 0.$$
>   If in addition $Y$ is Hamiltonian, $Y=X_F$, we call $F$ a **Hamiltonian symmetry generator**.

> [!abstract] Proposition 4.16 (Hamiltonian symmetries give conserved quantities)
> Let $Y=X_F$ be a Hamiltonian vector field on $(M,\omega)$, and let $H$ be a Hamiltonian. Then:
> 1. $Y$ is an infinitesimal symmetry of $(M,\omega,H)$ if and only if $\{F,H\}=0$.
> 2. Equivalently, $F$ is a first integral for the flow of $H$.

> [!success] Proof
> We have $\mathcal{L}_Y\omega = 0$ automatically because $Y$ is Hamiltonian. Moreover,
> $$\mathcal{L}_Y H = Y(H) = X_F(H) = \{H,F\} = -\{F,H\}.$$
> Hence $\mathcal{L}_Y H = 0$ if and only if $\{F,H\}=0$, which is equivalent to $F$ being a first integral by Proposition 4.7.

This is the symplectic-geometric form of **Noether’s principle**: “Hamiltonian symmetries produce conserved quantities.”

### 4.4.2 Commuting Hamiltonians and integrability (preview)

We give a first taste of integrable systems, to be developed further later.

> [!info] Definition (commuting Hamiltonians)
> Let $F,G\in C^\infty(M)$. We say that **$F$ and $G$ Poisson commute** if
> $$\{F,G\}=0.$$
> Equivalently, their Hamiltonian flows commute:
> $$\varphi_t^F\circ\varphi_s^G = \varphi_s^G\circ\varphi_t^F$$
> whenever both sides are defined.

> [!abstract] Proposition 4.17 (Commuting flows)
> If $\{F,G\}=0$ on $(M,\omega)$, then
> $$[X_F,X_G]=0$$
> and the flows of $X_F$ and $X_G$ commute (on their common domain of definition).

> [!success] Proof
> From Proposition 4.11,
> $$[X_F,X_G] = -X_{\{F,G\}}.$$
> If $\{F,G\}=0$, we obtain $[X_F,X_G]=0$, and the standard theory of commuting vector fields implies that their flows commute.

> [!info] Definition (Liouville integrable system — informal)
> Let $(M^{2n},\omega)$ be symplectic and $H\in C^\infty(M)$. We say $H$ is **(Liouville) integrable** if there exist functions
> $$F_1=H,\ F_2,\dots,F_n\in C^\infty(M)$$
> such that:
> - $\{F_i,F_j\} = 0$ for all $i,j$ (they Poisson commute);
> - the differentials $dF_1,\dots,dF_n$ are linearly independent on an open dense subset of $M$ (functional independence).

The Liouville–Arnold theorem (to be discussed later) shows that under suitable compactness assumptions, the regular level sets
> $$F^{-1}(c_1,\dots,c_n)$$
are unions of Lagrangian tori, and the flow of $H$ on each torus is quasi-periodic with “angle” coordinates.

> [!example] Example 4.18 (Harmonic oscillator as integrable system)
> For the $n$-dimensional harmonic oscillator
> $$H(q,p) = \sum_{j=1}^n\left(\frac{p_j^2}{2m} + \frac{k_j q_j^2}{2}\right)$$
> on $(\mathbb{R}^{2n},\omega_0)$, the functions
> $$F_j(q,p) = \frac{p_j^2}{2m} + \frac{k_j q_j^2}{2},\quad j=1,\dots,n,$$
> Poisson commute and are functionally independent on an open dense subset (where no coordinate pair $(q_j,p_j)$ vanishes). Thus $H$ is integrable, and the phase space decomposes into invariant Lagrangian tori on which the motion is quasi-periodic.

---

In this chapter we have:

- introduced Hamiltonian and symplectic vector fields and clarified their relation via de Rham cohomology;
- derived Hamilton’s equations in coordinates and revisited classical mechanical systems (free particle, harmonic oscillator, central force) as examples of Hamiltonian flows;
- defined the Poisson bracket, shown that $C^\infty(M)$ becomes a Poisson algebra, and identified the Lie algebra homomorphism from observables to Hamiltonian vector fields;
- related symmetries to conserved quantities in a Noether-type statement;
- given a first glimpse of integrable Hamiltonian systems via commuting Hamiltonians.

These structures will be crucial for subsequent topics such as Hamiltonian group actions, moment maps, and symplectic reduction.