+++
date = "2022-06-10T15:44:10-04:00"
draft = false
title = "Natural Transformations and Functor Categories"
categories = [ "Math" ]
ShowToc = true
tags = [ "Category Theory" ]
+++
## Natural transformations: maps between functors

Functors are the morphisms in the “category of categories.” Natural transformations are the morphisms between functors. They express the idea that two functors $F,G:\mathcal{C}\to\mathcal{D}$ may relate in a way that is compatible with every morphism of $\mathcal{C}$.

> [!info] Natural transformation
> Let $F,G:\mathcal{C}\to\mathcal{D}$ be functors. A **natural transformation** $\alpha:F\Rightarrow G$ consists of a family of morphisms in $\mathcal{D}$
> $$\alpha_X:F(X)\longrightarrow G(X)\qquad (X\in \mathrm{Ob}(\mathcal{C}))$$
> such that for every morphism $f:X\to Y$ in $\mathcal{C}$, the **naturality square** commutes:
> $$\begin{CD} F(X) @>F(f)>> F(Y) \\ @V\alpha_X VV @VV\alpha_Y V \\ G(X) @>>G(f)> G(Y) \end{CD}$$
> Equivalently, $G(f)\circ \alpha_X=\alpha_Y\circ F(f)$.
> The morphisms $\alpha_X$ are called the **components** of $\alpha$.

> [!danger] Naturality is a compatibility condition, not extra data
> A natural transformation is determined by its components, but the components are not arbitrary: they must satisfy the single scheme of equations $G(f)\circ \alpha_X=\alpha_Y\circ F(f)$ for all morphisms of $\mathcal{C}$. One can think of this equation as saying that $\alpha$ is a morphism of “$\mathcal{C}$-shaped diagrams in $\mathcal{D}$.”

> [!note] Pointwise equality
> Let $\alpha,\beta:F\Rightarrow G$ be natural transformations. Then $\alpha=\beta$ if and only if $\alpha_X=\beta_X$ for every object $X$ of $\mathcal{C}$.

> [!success] Proof
> By definition, a natural transformation is exactly the family of its components satisfying naturality.

## Vertical composition and natural isomorphisms

Natural transformations compose in the obvious “pointwise” way.

> [!info] Vertical composition
> Given functors $F,G,H:\mathcal{C}\to\mathcal{D}$ and natural transformations
> $$\alpha:F\Rightarrow G,\quad \beta:G\Rightarrow H,$$
> their **vertical composite** $\beta\circ \alpha:F\Rightarrow H$ is defined by
> $$ (\beta\circ \alpha)_X:=\beta_X\circ \alpha_X. $$

> [!note] Vertical composition is natural
> With notation as above, $\beta\circ \alpha:F\Rightarrow H$ is a natural transformation.

> [!success] Proof
> For any $f:X\to Y$ in $\mathcal{C}$, using naturality of $\alpha$ and $\beta$,
> $$H(f)\circ (\beta\circ \alpha)_X=H(f)\circ \beta_X\circ \alpha_X=\beta_Y\circ G(f)\circ \alpha_X=\beta_Y\circ \alpha_Y\circ F(f)=(\beta\circ \alpha)_Y\circ F(f).$$

> [!info] Identity natural transformation
> For a functor $F:\mathcal{C}\to\mathcal{D}$, the **identity natural transformation** $\mathrm{id}_F:F\Rightarrow F$ has components $(\mathrm{id}_F)_X:=\mathrm{id}_{F(X)}$.

> [!info] Natural isomorphism
> A natural transformation $\alpha:F\Rightarrow G$ is a **natural isomorphism** if each component $\alpha_X:F(X)\to G(X)$ is an isomorphism in $\mathcal{D}$. In that case we write $F\cong G$ and call $F$ and $G$ **naturally isomorphic**.

> [!note] Inverses are natural
> If $\alpha:F\Rightarrow G$ is a natural isomorphism, then the pointwise inverses
> $$ (\alpha^{-1})_X:=(\alpha_X)^{-1}:G(X)\to F(X) $$
> assemble into a natural isomorphism $\alpha^{-1}:G\Rightarrow F$.

> [!success] Proof
> For any $f:X\to Y$,
> $$G(f)\circ \alpha_X=\alpha_Y\circ F(f)\quad\Longrightarrow\quad \alpha_Y^{-1}\circ G(f)=F(f)\circ \alpha_X^{-1}$$
> by composing on the left with $\alpha_Y^{-1}$ and on the right with $\alpha_X^{-1}$.

## Functor categories $[\mathcal{C},\mathcal{D}]$

Natural transformations allow us to treat “functors as objects” and “natural transformations as morphisms.”

> [!info] Functor category
> Let $\mathcal{C},\mathcal{D}$ be categories. The **functor category** $[\mathcal{C},\mathcal{D}]$ is defined as follows:
> 1. objects are functors $F:\mathcal{C}\to\mathcal{D}$;
> 2. morphisms $F\to G$ are natural transformations $F\Rightarrow G$;
> 3. identities are identity natural transformations;
> 4. composition is vertical composition of natural transformations.

> [!abstract] Functor categories are categories
> If $\mathcal{C}$ is small and $\mathcal{D}$ is locally small, then $[\mathcal{C},\mathcal{D}]$ is locally small, and the above operations make it into a category.

> [!success] Proof
> For functors $F,G:\mathcal{C}\to\mathcal{D}$, a natural transformation $\alpha:F\Rightarrow G$ is a family $\{\alpha_X\in \mathcal{D}(F(X),G(X))\}_{X\in \mathrm{Ob}(\mathcal{C})}$ satisfying naturality equations. Since $\mathcal{C}$ is small and each hom-collection in $\mathcal{D}$ is a set, the collection of such families is a set. Associativity and unit laws for composition hold pointwise because they hold in $\mathcal{D}$.

> [!danger] Natural transformations as morphisms of diagrams
> A functor $F:\mathcal{C}\to\mathcal{D}$ can be viewed as a $\mathcal{C}$-indexed diagram in $\mathcal{D}$. Then a natural transformation $\alpha:F\Rightarrow G$ is exactly a morphism between these diagrams, i.e. a coherent choice of arrows relating corresponding nodes. This viewpoint will later make categorical constructions (limits, colimits, Kan extensions) feel inevitable.

## Whiskering and functoriality of composition

Natural transformations can be transported along functors by pre- and post-composition; this operation is called **whiskering**.

> [!info] Postcomposition
> Let $H:\mathcal{D}\to\mathcal{E}$ be a functor and $\alpha:F\Rightarrow G$ a natural transformation between functors $F,G:\mathcal{C}\to\mathcal{D}$. Define a natural transformation
> $$H\alpha:HF\Rightarrow HG$$
> by $(H\alpha)_X:=H(\alpha_X)$.

> [!info] Precomposition
> Let $K:\mathcal{B}\to\mathcal{C}$ be a functor and $\alpha:F\Rightarrow G$ a natural transformation between functors $F,G:\mathcal{C}\to\mathcal{D}$. Define a natural transformation
> $$\alpha K:FK\Rightarrow GK$$
> by $(\alpha K)_B:=\alpha_{K(B)}$.

> [!note] Whiskering is functorial
> Both constructions above are natural transformations, and they are functorial in the following sense:
> 1. postcomposition by $H$ defines a functor
> $$H_*:[\mathcal{C},\mathcal{D}]\longrightarrow [\mathcal{C},\mathcal{E}],\qquad F\mapsto HF,\ \ \alpha\mapsto H\alpha;$$
> 2. precomposition by $K$ defines a functor
> $$K^*:[\mathcal{C},\mathcal{D}]\longrightarrow [\mathcal{B},\mathcal{D}],\qquad F\mapsto FK,\ \ \alpha\mapsto \alpha K.$$

> [!success] Proof
> Naturality of $H\alpha$ follows from applying $H$ to $G(f)\circ \alpha_X=\alpha_Y\circ F(f)$. Naturality of $\alpha K$ follows by evaluating the same equation on morphisms of the form $K(u)$. Functoriality is verified pointwise: identities and compositions are preserved because $H$ and $K$ preserve identities and compositions.

> [!abstract] Horizontal composition of natural transformations
> Let $\alpha:F\Rightarrow G$ be a natural transformation between functors $\mathcal{C}\to\mathcal{D}$, and let $\beta:H\Rightarrow K$ be a natural transformation between functors $\mathcal{D}\to\mathcal{E}$. Then there is a natural transformation
> $$\beta\star \alpha:HF\Rightarrow KG$$
> whose component at $X\in \mathcal{C}$ can be defined by either of the equal morphisms
> $$ (\beta\star \alpha)_X := \beta_{G(X)}\circ H(\alpha_X) = K(\alpha_X)\circ \beta_{F(X)}. $$

> [!success] Proof
> The displayed equality is exactly the naturality of $\beta$ applied to the morphism $\alpha_X:F(X)\to G(X)$ in $\mathcal{D}$. Naturality of $\beta\star \alpha$ is a straightforward diagram chase using naturality of $\alpha$ and $\beta$.

> [!danger] Remark
> The operations “vertical composition” and “horizontal composition” are the algebraic reflection of a ubiquitous practice: first compare objects inside a fixed ambient category, then transport that comparison along a change of context. We will use this repeatedly without ceremony.

## Examples: what naturality looks like in practice

> [!example] Representables: precomposition is natural
> Fix a morphism $u:X\to Y$ in a category $\mathcal{C}$. Define a family of functions
> $$\alpha_A:\mathcal{C}(Y,A)\longrightarrow \mathcal{C}(X,A),\qquad \alpha_A(g):=g\circ u.$$
> Then $\alpha$ is a natural transformation
> $$\alpha:\mathcal{C}(Y,-)\Rightarrow \mathcal{C}(X,-).$$
> Indeed, for any $f:A\to B$ and any $g:Y\to A$,
> $$\alpha_B(f\circ g)=(f\circ g)\circ u = f\circ (g\circ u)=f\circ \alpha_A(g),$$
> which is precisely the naturality condition in $\mathbf{Set}$ for the functions $\alpha_A$.

> [!example] Preorders: natural transformations are pointwise comparisons
> Let $\mathcal{P},\mathcal{Q}$ be thin categories arising from preorders $(P,\le)$ and $(Q,\preceq)$. A functor $F:\mathcal{P}\to\mathcal{Q}$ is the same as a monotone function $F:P\to Q$. Given functors $F,G:\mathcal{P}\to\mathcal{Q}$, a natural transformation $\alpha:F\Rightarrow G$ exists if and only if $F(x)\preceq G(x)$ for every $x\in P$; in that case it is unique. Thus in thin categories, “naturality” collapses to a pointwise inequality.

> [!example] Swapping factors is naturally an isomorphism
> Fix a set $A$. Consider the two functors $A\times(-),\,(-)\times A:\mathbf{Set}\to\mathbf{Set}$. Define $\sigma_X:A\times X\to X\times A$ by $\sigma_X(a,x)=(x,a)$. Then $\sigma:A\times(-)\Rightarrow (-)\times A$ is a natural isomorphism. Naturality says that for any function $f:X\to Y$,
> $$(f\times \mathrm{id}_A)\circ \sigma_X = \sigma_Y\circ (\mathrm{id}_A\times f),$$
> which holds by direct evaluation on pairs $(a,x)$.

> [!example] Double dual as a natural transformation
> Fix a field $k$. The double-dual assignment $V\mapsto V^{\vee\vee}$ defines an endofunctor on $\mathbf{Vect}_k$. There is a canonical family of linear maps
> $$\eta_V:V\longrightarrow V^{\vee\vee},\qquad \eta_V(v)(\phi):=\phi(v)\quad (\phi\in V^\vee),$$
> and this family is natural in $V$, hence defines a natural transformation
> $$\eta:\mathrm{Id}_{\mathbf{Vect}_k}\Rightarrow (-)^{\vee\vee}.$$
> Naturality is the statement that for any linear map $f:V\to W$,
> $$f^{\vee\vee}\circ \eta_V=\eta_W\circ f,$$
> which follows by evaluating both sides on $v\in V$ and $\psi\in W^\vee$.

> [!example] A quotient map as a natural transformation
> Let $i:\mathbf{Ab}\to \mathbf{Grp}$ be the inclusion functor. Define a functor $(-)^{\mathrm{ab}}:\mathbf{Grp}\to \mathbf{Ab}$ by sending a group $G$ to its abelianization $G^{\mathrm{ab}}$, and a homomorphism $h:G\to H$ to the induced homomorphism $h^{\mathrm{ab}}:G^{\mathrm{ab}}\to H^{\mathrm{ab}}$. For each $G$ there is a canonical quotient homomorphism $q_G:G\to i(G^{\mathrm{ab}})$. The family $\{q_G\}$ is natural in $G$, hence determines a natural transformation
> $$q:\mathrm{Id}_{\mathbf{Grp}}\Rightarrow i\circ (-)^{\mathrm{ab}}.$$
> Naturality says $i(h^{\mathrm{ab}})\circ q_G=q_H\circ h$ for all $h:G\to H$, i.e. “quotient then map” equals “map then quotient.”

> [!danger] Naturality as a computation rule
> The equation $G(f)\circ \alpha_X=\alpha_Y\circ F(f)$ can be used as a rewriting rule: given $\alpha:F\Rightarrow G$ and a morphism $f:X\to Y$, one may slide $\alpha$ past $f$ by
> $$\alpha_Y\circ F(f)=G(f)\circ \alpha_X.$$
> In practice, this is how one proves identities involving canonical maps: one writes down the only sensible composite, then uses naturality (often together with a universal property later on) to show all reasonable constructions agree.
