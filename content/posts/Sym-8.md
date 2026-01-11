+++
date = "2024-11-24T15:44:10-04:00"
draft = false
title = "Weinstein Lagrangian Neighborhood Theorem"
categories = [ "Math" ]
ShowToc = true
tags = [ "Symplectic Geometry" ]
+++

Weinstein's theorem is a **relative** version of Darboux: instead of standardizing $\omega$ near a point, it standardizes $\omega$ near a Lagrangian submanifold. It is the main local normal form result for Lagrangians and is the key bridge from geometry to intersection-type problems (and later to Floer theory).
## Statement and Geometric Meaning

> [!note] Weinstein Lagrangian Neighborhood Theorem
> Let $(M,\omega)$ be a symplectic manifold and let $L\subset M$ be a compact embedded Lagrangian submanifold. Then there exist neighborhoods $U$ of $L$ in $M$ and $V$ of the zero section $0_L$ in $T^*L$, and a diffeomorphism
> $$\Phi:V\longrightarrow U$$
> such that:
> 1. $\Phi|_{0_L}=\mathrm{id}_L$ (under the identification $0_L\simeq L$);
> 2. $\Phi^*\omega=\omega_{\mathrm{can}}$ on $V$, where $\omega_{\mathrm{can}}=d\lambda_{\mathrm{can}}$ is the canonical symplectic form on $T^*L$.
>
> In particular, $(U,\omega)$ is symplectomorphic to a neighborhood of the zero section in $(T^*L,\omega_{\mathrm{can}})$.

> [!danger] Remark
> The theorem says that the **only** local symplectic data near a Lagrangian $L$ is the smooth manifold $L$ itself:
> a neighborhood of $L$ "is" a neighborhood of $0_L$ inside $T^*L$.
> Thus, many local questions about Lagrangians can be reduced to linear-algebraic and cotangent-bundle computations.

## Normal Bundle and the Canonical Identification $NL\simeq T^*L$

Let $i:L\hookrightarrow M$ be the inclusion. Denote by $TL$ the tangent bundle of $L$ and by $TM|_L$ the restriction of $TM$ to $L$.

> [!info] Normal Bundle
> The (vector) normal bundle of $L$ in $M$ is the quotient bundle
> $$NL := TM|_L / TL.$$
> A point of $NL$ is a class $[v]$ where $v\in T_pM$ and we identify $v\sim v+w$ for $w\in T_pL$.

The symplectic form identifies normal directions with covectors on $L$.

> [!abstract] Canonical Bundle Isomorphism $NL\cong T^*L$
> Let $L\subset (M,\omega)$ be Lagrangian. Define a bundle map
> $$\Psi:NL\longrightarrow T^*L$$
> by
> $$\Psi([v]) := \omega_p(v,\cdot)\big|_{T_pL}\in T_p^*L,\qquad [v]\in N_pL,\ p\in L.$$
> Then $\Psi$ is a well-defined vector bundle isomorphism.

> [!success] Proof
> **Well-definedness.** If $v$ is replaced by $v+w$ with $w\in T_pL$, then for any $u\in T_pL$,
> $$\omega_p(v+w,u)=\omega_p(v,u)+\omega_p(w,u).$$
> Since $L$ is Lagrangian, $\omega_p|_{T_pL\times T_pL}\equiv 0$, hence $\omega_p(w,u)=0$ for all $u\in T_pL$.
> Thus $\omega_p(v+w,\cdot)|_{T_pL}=\omega_p(v,\cdot)|_{T_pL}$, and $\Psi$ is well-defined.
>
> **Injectivity.** If $\Psi([v])=0$, then $\omega_p(v,u)=0$ for all $u\in T_pL$, i.e. $v\in (T_pL)^\omega$.
> But $L$ is Lagrangian, so $(T_pL)^\omega=T_pL$, hence $v\in T_pL$ and $[v]=0$ in $N_pL$.
>
> **Surjectivity.** Since $\dim N_pL=\dim T_p^*L=n$, injectivity implies surjectivity fiberwise.
> Smoothness is clear from smoothness of $\omega$.

> [!danger] Remark
> This is one of the most important linear-algebraic facts in the subject:
> the symplectic form gives a canonical identification between normal directions to a Lagrangian and covectors on the Lagrangian.
> This is why cotangent bundles are the universal local models for Lagrangians.

## A Relative Primitive Lemma Along the Zero Section

To apply Moser's trick, we need to write the difference of two closed $2$-forms as an exact form,
with a primitive that vanishes along the reference submanifold.

> [!note] Relative Primitive Near the Zero Section
> Let $L$ be a manifold and let $V\subset T^*L$ be a neighborhood of the zero section $0_L$.
> Let $\beta\in \Omega^2(V)$ be a closed $2$-form such that $\beta|_{0_L}\equiv 0$.
> Then after shrinking $V$ if necessary, there exists a $1$-form $\alpha\in \Omega^1(V)$ such that
> $$d\alpha=\beta\quad\text{and}\quad \alpha|_{0_L}\equiv 0.$$

> [!success] Proof
> Fix a neighborhood $V$ on which the fiberwise scaling maps are defined:
> for $t\in[0,1]$, let $\rho_t:T^*L\to T^*L$ be $\rho_t(q,p)=(q,tp)$ in any local trivialization.
> Let $R$ be the fiberwise radial vector field (locally $R=\sum_i p_i\partial_{p_i}$), so that $\frac{d}{dt}\rho_t=\frac{1}{t}R\circ \rho_t$ for $t>0$.
>
> Define
> $$\alpha := \int_0^1 \iota_R\bigl(\rho_t^*\beta\bigr)\,\frac{dt}{t},$$
> which is well-defined on a sufficiently small neighborhood of $0_L$ because $\beta|_{0_L}=0$ ensures the integrand extends smoothly to $t=0$.
> A standard homotopy-operator computation shows $d\alpha=\beta$.
> Moreover, $\alpha|_{0_L}=0$ because $R$ vanishes along $0_L$.

> [!danger] Remark
> This is the "submanifold version" of the pointwise primitive lemma used in Darboux.
> It is exactly what makes Moser's vector field vanish on the reference Lagrangian, ensuring the isotopy fixes it.

## Proof of Weinstein via Relative Moser

> [!success] Proof of Weinstein Lagrangian Neighborhood Theorem
> **Step 1: a tubular neighborhood diffeomorphism.**
> Choose a Riemannian metric on $M$ and let $\exp^\perp$ denote the exponential map along normal directions.
> The tubular neighborhood theorem gives a neighborhood $U_0$ of the zero section in $NL$ and a diffeomorphism
> $$\tau:U_0\longrightarrow U\subset M$$
> onto a neighborhood $U$ of $L$, with $\tau|_{0_L}=\mathrm{id}_L$ and $d\tau$ restricting to the identity on $TL$ along $0_L$.
>
> Using the canonical identification $NL\simeq T^*L$, we obtain a diffeomorphism (still denoted)
> $$\tau:V_0\subset T^*L \longrightarrow U\subset M$$
> from a neighborhood $V_0$ of $0_L$.
>
> **Step 2: compare $\tau^*\omega$ with the canonical form.**
> Let
> $$\omega_1 := \tau^*\omega\in \Omega^2(V_0),\qquad \omega_0 := \omega_{\mathrm{can}}\in \Omega^2(T^*L).$$
> We claim that $\omega_1$ and $\omega_0$ agree along the zero section:
> $$\omega_1|_{0_L}=\omega_0|_{0_L}.$$
> Indeed, both forms vanish on $T(0_L)=TL$ because $0_L$ is Lagrangian in $(T^*L,\omega_{\mathrm{can}})$ and $L$ is Lagrangian in $(M,\omega)$.
> Moreover, by the way we identified the normal bundle with $T^*L$, the mixed pairing between tangent and normal directions
> matches the canonical pairing that defines $\omega_{\mathrm{can}}$ along $0_L$.
>
> Thus the difference
> $$\beta := \omega_1-\omega_0$$
> is a closed $2$-form on $V_0$ with $\beta|_{0_L}=0$.
>
> **Step 3: build a Moser family and solve the Moser equation.**
> By **Relative Primitive Near the Zero Section**, after shrinking to a smaller neighborhood $V\subset V_0$,
> there exists a $1$-form $\alpha$ on $V$ such that
> $$d\alpha=\beta\qquad\text{and}\qquad \alpha|_{0_L}=0.$$
> Define
> $$\omega_t := \omega_0+t(\omega_1-\omega_0)=\omega_0+t\beta,\qquad t\in[0,1].$$
> Shrinking $V$ if necessary, all $\omega_t$ are symplectic on $V$ because nondegeneracy is an open condition and $\omega_t|_{0_L}=\omega_0|_{0_L}$.
>
> Solve the Moser equation
> $$\iota_{X_t}\omega_t=-\alpha.$$
> Since $\omega_t$ is nondegenerate, $X_t$ exists and is smooth.
> Because $\alpha|_{0_L}=0$, we get $X_t|_{0_L}=0$, so the flow will fix the zero section pointwise.
>
> Let $\{\varphi_t\}$ be the (local) isotopy generated by $X_t$ with $\varphi_0=\mathrm{id}$.
> On a sufficiently small neighborhood of $0_L$, it exists for all $t\in[0,1]$.
> By the same computation as in Moser's theorem,
> $$\frac{d}{dt}(\varphi_t^*\omega_t)=\varphi_t^*\bigl(\dot{\omega}_t+d(\iota_{X_t}\omega_t)\bigr)=\varphi_t^*(\beta+d(-\alpha))=0,$$
> so $\varphi_1^*\omega_1=\omega_0$ on a (possibly smaller) neighborhood $V$.
> Also $\varphi_t|_{0_L}=\mathrm{id}$ because $X_t$ vanishes along $0_L$.
>
> **Step 4: define the Weinstein chart.**
> Set
> $$\Phi := \tau\circ \varphi_1:V\longrightarrow U.$$
> Then
> $$\Phi^*\omega=\varphi_1^*(\tau^*\omega)=\varphi_1^*\omega_1=\omega_0=\omega_{\mathrm{can}},$$
> and $\Phi|_{0_L}=\mathrm{id}_L$.
> This is the desired symplectomorphism.

> [!danger] Remark
> The proof is exactly "Darboux + relative data":
> one first gets an arbitrary tubular diffeomorphism identifying a neighborhood of $L$ with a neighborhood in $T^*L$, then uses relative Moser to correct it into a symplectomorphism while fixing $L$.

## Nearby Lagrangians Are Graphs of Closed $1$-Forms

> [!idea] Graph Description of Nearby Lagrangians
> Let $L\subset (M,\omega)$ be a compact embedded Lagrangian.
> After identifying a neighborhood of $L$ with a neighborhood of $0_L$ in $(T^*L,\omega_{\mathrm{can}})$ by Weinstein's theorem,
> any embedded Lagrangian $L'\subset M$ sufficiently $C^1$-close to $L$ can be written uniquely as a graph
> $$L'=\Gamma(\alpha)\subset T^*L$$
> for some $1$-form $\alpha\in \Omega^1(L)$. Moreover, $L'$ is Lagrangian iff $d\alpha=0$.

> [!success] Proof
> In $T^*L$, a submanifold close to $0_L$ that is transverse to the fibers projects diffeomorphically to $L$,
> hence is the graph of a $1$-form $\alpha$.
> The Lagrangian condition is exactly the computation from the cotangent bundle section:
> $\Gamma(\alpha)$ is Lagrangian iff $d\alpha=0$.

> [!danger] Remark
> If $(M,\omega)$ is exact near $L$ and $L'$ is Hamiltonian isotopic (or exact) relative to a chosen primitive,
> one often gets $\alpha=df$ locally. This is the local origin of "Morse functions" in Lagrangian Floer theory.

## Application: Intersections Become Critical Points (Local Picture)

> [!abstract] Local Intersection Model
> Let $L_0,L_1\subset (M,\omega)$ be embedded Lagrangians, and let $p\in L_0\cap L_1$.
> Assume $L_1$ is sufficiently $C^1$-close to $L_0$ near $p$ (for instance, after restricting to a small neighborhood).
> Then there exists a symplectic chart identifying a neighborhood of $p$ in $M$ with a neighborhood of $0$ in $T^*L_0$ such that
> $$L_0\ \text{corresponds to}\ 0_{L_0},\qquad L_1\ \text{corresponds to}\ \Gamma(\alpha)$$
> for some closed $1$-form $\alpha$ on a neighborhood in $L_0$.
> In this identification,
> $$L_0\cap L_1\ \longleftrightarrow\ \{x\in L_0\mid \alpha_x=0\}.$$
> If $\alpha=df$ locally, then intersection points correspond to critical points of $f$.

> [!success] Proof
> Apply Weinstein's theorem to $L_0$ to identify a neighborhood of $L_0$ with a neighborhood of $0_{L_0}$ in $T^*L_0$.
> If $L_1$ is sufficiently $C^1$-close, it is transverse to the fibers, hence a graph $\Gamma(\alpha)$.
> By the graph criterion in $T^*L_0$, it is Lagrangian iff $d\alpha=0$.
> Intersections with the zero section are exactly zeros of $\alpha$.
> If $\alpha=df$ locally, then $\alpha_x=0$ iff $df_x=0$.

> [!danger] Remark
> Floer theory is, in a sense, a "globalized Morse theory" for Lagrangian intersections. The proposition above explains why Morse-theoretic objects appear: locally, Lagrangian intersections look like critical points of a function. Weinstein's theorem is the mechanism that justifies this dictionary.


