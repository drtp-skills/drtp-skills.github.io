---
title: "Findable Training"
permalink: /findable-training/
layout: single
classes: wide
toc: true
---

### Introduction

The aims of the CHARTED project include “making HPC training content more FAIR (findable, accessible, interoperable and reusable);”. This terminology may not be familiar to everyone involved in the development of the training ecosystem for digital Research Technical Professionals. Even where the terminology may be familiar, different people will have different [interpretations of the terms](https://drtp-skills.ac.uk/defining-fair-training/). To examine this, it's useful to look at each of the terms in more detail, so what specifically does it mean for training content to be findable?

### Definitions

The [FAIR Principles](https://www.gofair.foundation/) are a set of fifteen principles first defined in the context of research data, but broadly applicable to any digital resource. The principles state that for data (or metadata) to be findable they should:

> * F1: be assigned a globally unique and persistent identifier
> * F2: be described with rich metadata \[for data\]
> * F3: clearly and explicitly include the identifier of the data they describe \[for metadata\]
> * F4: be registered or indexed in a searchable resource

Due to their broad applicability, this guidance is non-specific, and more specific definitions have been given for learning materials (taken from [Skills4EOSC FAIR-by-design](https://www.skills4eosc.eu/resources/fair-by-design-methodology)):

> * The editable learning material has a unique and persistent identifier (PID) and is described with sufficiently detailed metadata.

Succinct specific guidance is given in [Ten simple rules for making training materials FAIR](https://doi.org/10.1371/journal.pcbi.1007854):

> * Rule 1: Plan to share your training materials online
> * Rule 2: Improve findability of your training materials by properly describing them
> * Rule 3: Give your training materials a unique identity
> * Rule 4: Register your training materials online

### Interpretations

These definitions of findability focus on the enabling technical factors that are necessary for learners to find material through links or registries. During a community feedback session held by the CHARTED project at CIUK 2025, trainers and learners were asked to reflect on what findability of training meant to them, and answers covered a number of different aspects. For most of the above definitions there was generally agreement and understanding of the interpretations. There was one comment that could be seen as a different interpretation:

> * \[Referring to Improve findability of your training materials by properly describing them\]: Built-in since most training materials are text based

This could be that it is interpreting the rule as being about a textual description of the content, rather than metadata, as the rule text does not specifically mention metadata, although the fuller description in the Ten simple rules paper is very specific. It does also hint at another aspect of the guidelines related to findability, which is that they are mostly focused on the registration and findability of material in specific registries, and therefore require structured metadata to support that. However, many learners and creators may tend to first think about the findability of material in general search engines or artificial intelligence tools, where textual-based material would enhance findability. This aspect of where things are findable, and how learners find material in practice was also highlighted in other comments:

> * Even if a course is documented, identified and registered, it’s not necessarily findable if it’s not in a big repository, and if on a big repository, then it’s only findable if there is a good search function.
> * Make sure material is cross-posted or signposted on other repositories, from local (e.g. internal wiki) to sectoral (e.g. EOSC) to commercial (e.g. LinkedIn learning)
> * For papers there is a traditional culture of presenting at conferences, but not so common for training materials or even about research software
> * Give your training materials a unique identity: [Zenodo.org](http://Zenodo.org); Using DOIs
> * \[An example of repository that makes training content more discoverable\] : Carpentries Incubator

One other aspect that was raised repeatedly concerned the ability of learners to evaluate the training based on the information available \- to find the *right* training rather than any training:

> * Findable in context: Real learning often requires a mixture of (curated) formats e.g. video for intro, problem sets (could be bundled with video or separate), worked problem alone, worked problem with a learning group. All of these elements should be findable, and finding it should include some aspect of quality assessment.
> * Metadata needs to cover delivery format.
> * Need a good description of a course so you can decide if its decent quality and relevant enough to try it.
> * Need user annotation of courses for other users for quality info
> * Libraries have experience curating resources, so they should be doing this

This was also related to another aspect that was identified as related to findability but not evident from the definitions. Learners do not always know what training they are trying to find, and may need assistance with this. If that assistance comes from another person, such as a manager, the way they need to find learning may be different:

> * You don’t know what you don’t know – how does a beginner find out what they need to know? Findability includes development reviews.
> * Who needs to find the courses? Learner or their manager? Might have different needs.
> * Directing someone to a training resource is implicit approval of this training – someone has to curate this

It’s clear that meeting the technical definitions of findability referred to above are going to be necessary to work towards CHARTED’s goal of making the training ecosystem easier to navigate. However, by itself this is unlikely to be sufficient. Questions such as which repositories are or would be likely to be used by dRTPs, or what information needs to be present to allow them to evaluate potential training will also need to be addressed. This is not necessarily included in the definitions of Findability above (nor necessarily in any other defined aspect of FAIR), but CHARTED is still interested in funding work that addresses any of these broader interpretations of findability.

### Benefits

The benefits of findability could be seen as either benefits for learners or benefits for creators. Many of the statements below are positioned as benefits for learners. However, this is not a true division and the two are closely linked. For example, by making changes that benefit learners, you increase the number of learners who benefit from your training, hopefully bringing more positive attention to your training, more future learners, more opportunities for funding etc. Similarly, making changes that benefit creators could reduce the amount of time they spend on maintaining training, and free up time to improve the quality of the training, therefore benefiting learners.

#### Identity

Giving your training resource an identifier lets people easily find it, and it can be shared \- through search engines, training repositories and personal recommendations. It also helps to differentiate it from other similarly named training resources, or where you have multiple instances of the same training course. While a URL on your own website can serve this purpose, if the URL of the resource ever changes, any links to the training will no longer work. A persistent identifier which is designed to always remain the same, even if the resource moves can alleviate this.

Another benefit of having a persistent identifier for training material is that it helps with recording and crediting the contributions of creators and trainers to the material. Recording the training material as an output of their work can then help the trainers to use the material as evidence of their career development, in the same way as a publication.

Persistent identifiers can also facilitate moving the material to an archive or repository if you decide to stop hosting it, while still ensuring others can find the material in the same way.

#### Information

The main things that a prospective learner will want to know about your training are: what will it teach them; how will it help them achieve their goals; and what do they need to know to be able to benefit from it. If you cannot answer these for them succinctly, they are unlikely to make use of your training. By also including information about the time commitment, format, expected requirements, cost etc. you can best help them to make an informed decision about whether your training is for them. This information can also be useful when the person evaluating the training is *not* the learner, but somebody in a position to recommend training to a learner, such as a manager.

#### Metadata

By making the information about your training easily available to find, potentially in multiple places, you increase the chances of learners using your training. This includes registering it in specific training registries, but also by making it more findable by search engines or artificial intelligence tools. While copying and pasting your training information into multiple places is possible, it’s also fairly tedious, especially if you then need to change something such as the time of a session.

It’s easier to integrate with training registries such as [TeSS](https://tess.elixir-europe.org/) or [HPC-ED Search](https://search-pilot.operations.access-ci.org/hpc-ed-v2/) by describing your training with structured metadata, and it’s also a crucial first step for making your training FAIR in other ways. This information can also be used by general search engines, and overall can make your material more discoverable, as well as helping to give others clear guidance on if and how they can use or reuse it.

#### Advertising

Learners need to know that your training exists to make use of it. If you are running training repeatedly, having a clear communication and advertising strategy helps to spread awareness as widely as possible, rather than relying on ad-hoc or sporadic advertising each time. This also helps you to measure how effective your advertising is and when to change your strategy if it is not reaching your intended audience.

For training that takes place at a fixed time, there may be a mismatch between when the training is needed vs. when it is delivered. Learners may often identify that they need a particular type of training when it isn't actually available. If they don't know when it will next become available, they'll have to check frequently, or more likely end up missing out altogether.
These resources are also good ways of measuring interest in your training, in order to help your planning for future sessions.

A training roadmap can also be useful to allow learners to see what training may be coming in the future and plan their project accordingly. It also helps them see when training is updated, which can be particularly useful if tools or techniques have become outdated and it would be useful for them to redo training. It also provides an opportunity for them to comment on your training plans, and indicate which areas they'd be particularly interested in, or topics you may have missed.

### Guidance

#### Identity

There are multiple approaches to assigning persistent identifiers to your material, including generating persistent URLs or obtaining digital object identifiers (DOIs). This process can also be streamlined through the use of repositories or data services. It’s also worth considering how and what particular aspects need to be identified. For more information and guidance on this, see [Chapter 5 of the ELIXIR FAIR training handbook](https://elixir-europe-training.github.io/ELIXIR-TrP-FAIR-training-handbook/chapters/chapter_05/).

Examples:

* [https\://galaxyproject.github.io/training-material/topics/introduction/tutorials/galaxy-intro-short/tutorial.html](https://galaxyproject.github.io/training-material/topics/introduction/tutorials/galaxy-intro-short/tutorial.html) (PURL)
* [https\://zenodo.org/records/7908089](https://zenodo.org/records/7908089) (Deposit of [https\://github.com/swcarpentry/git-novice/tree/2023.05](https://github.com/swcarpentry/git-novice/tree/2023.05))
* [https\://tess.elixir-europe.org/materials/helis-academy-course-fair-data-stewardship-2021-day-1-introduction-landscape-wrap-up-f41b3204-b9e4-486c-90cd-c2a073c0b785](https://tess.elixir-europe.org/materials/helis-academy-course-fair-data-stewardship-2021-day-1-introduction-landscape-wrap-up-f41b3204-b9e4-486c-90cd-c2a073c0b785) (DOI)

#### Information

It can be difficult to quickly, and concisely, summarise your training, especially when it may cover a lot of material, or have taken a long time to develop. However, unless learners can quickly identify whether or not your training is right for them, they may move on to other sources of training or AI generated summaries. When considering what information to include, you may want to consult the lists of recommended metadata, as in many cases it’s the same information as is needed for inclusion in other systems. For example, the list of recommended data in [Rule 7](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1007854#sec008) of "[Ten simple rules for making training materials FAIR](https://doi.org/10.1371/journal.pcbi.1007854)" would make a good starting point for any description of a training resource.

Examples:

* [https\://tess.elixir-europe.org/events/introduction-to-sequencing-data-analysis-23a189e8-5e09-43b0-af09-e5b8b07f08ba](https://tess.elixir-europe.org/events/introduction-to-sequencing-data-analysis-23a189e8-5e09-43b0-af09-e5b8b07f08ba)
* [https\://coderefinery.github.io/reproducible-research/](https://coderefinery.github.io/reproducible-research/)
* [https\://www\.archer2.ac.uk/training/courses/260721-data-carpentry/](https://www.archer2.ac.uk/training/courses/260721-data-carpentry/)

#### Metadata

A first step in adding metadata to your training material is to decide which metadata schema to use. While any structured metadata is probably better than none, the true value comes in using a schema that is shared by others. Two commonly-used schemas are the [RDA minimal metadata](https://doi.org/10.15497/RDA00073) and [training-related Bioschemas profiles](https://bioschemas.org/profiles/index). You may want to take into consideration your purposes for providing metadata and the requirements of any platforms. For example, TeSS publishes [documentation about how they use metadata in displaying training material](https://tess.elixir-europe.org/about/registering#automatic).

You can add metadata to your training material in a variety of ways. For example, there are guides on adding Bioschemas metadata [directly in HTML](https://bioschemas.org/tutorials/howto/howto_add_markup), or in [GitHub Pages](https://bioschemas.org/tutorials/howto/howto_add_github) (while these guides are for Bioschemas specifically, they should be broadly adaptable to other schema as well). Managing metadata manually can be cumbersome however, particularly at a low-level of granularity, so one approach may also be to build upon templates or frameworks that help support the generation of metadata, such as those provided by the [Galaxy Training Network](https://training.galaxyproject.org/training-material/faqs/gtn/fair_training.html) or [Carpentries Workbench](https://carpentries.github.io/workbench/).

Metadata isn't useful if you don't check that it is correct and up-to-date. If it is not, other systems that try to integrate, access or display your training may do so incorrectly, or you may be excluded altogether. You can use validators to check that your metadata is structurally correct, and viewers to check that the information in it matches what you expect. If your training resource changes you may need to update its metadata to reflect those changes.

For more information, see [Chapter 4 of ELIXIR FAIR Training Handbook](https://elixir-europe-training.github.io/ELIXIR-TrP-FAIR-training-handbook/chapters/chapter_04/) or [Rule 2](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1007854#sec003) of "[Ten simple rules for making training materials FAIR](https://doi.org/10.1371/journal.pcbi.1007854)".

Examples:

* [https\://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-intro-101-everyone/tutorial.html](https://training.galaxyproject.org/training-material/topics/introduction/tutorials/galaxy-intro-101-everyone/tutorial.html) (View HTML source and look for \<script type="application/ld+json"\> or load into a JSON-LD extractor)
* [https\://tess.elixir-europe.org/materials/hands-on-for-python-math-tutorial](https://tess.elixir-europe.org/materials/hands-on-for-python-math-tutorial) (View HTML source and look for \<script type=”application/ld+json”\> or load into a JSON-LD extractor)
* [https\://swcarpentry.github.io/shell-novice/](https://swcarpentry.github.io/shell-novice/) (View HTML source and look for \<script type=”application/ld+json”\> or load into a JSON-LD extractor)
* [https\://validator.schema.org](https://validator.schema.org)
* [https\://json-ld.org/playground/](https://json-ld.org/playground/)

#### Advertising

The first step in improving the advertising of your training is to define your current process, then evaluate it and decide how to refine it. This could start by clearly identifying the desired audience for your training, and writing down a list of where and how you advertise. From this, you can identify gaps, such as learner groups that you wish to reach, and search for places to reach those groups.

Setting up a mailing list for potential learners can also help them to make use of your training when they are able to. Many academic institutions offer mailing list hosting services that you can use or access to [JiscMail](https://www.jisc.ac.uk/jiscmail), but other free or commercial mailing services may be appropriate for your circumstances. If your organisation uses forums or chat services, these can also serve a similar purpose.

For some suggestions, see [Chapter 9 of ELIXIR FAIR Training Handbook](https://elixir-europe-training.github.io/ELIXIR-TrP-FAIR-training-handbook/chapters/chapter_09/) or this [UNIVERSE-HPC post on Effective Promotion and Delivery of Your Training Pilot](https://www.software.ac.uk/blog/effective-promotion-and-delivery-your-training-pilot).

Examples:

* [https\://coderefinery.github.io/manuals/workshop-marketing/](https://coderefinery.github.io/manuals/workshop-marketing/)
* [https\://www\.archer2.ac.uk/training/](https://www.archer2.ac.uk/training/) (Training Updates Mailing List)
* [https\://carpentries.org/workshops/upcoming-workshops/](https://carpentries.org/workshops/upcoming-workshops/)

### References and further material

This material and guidance is based on:

* [SSI Software Evaluation Service](https://www.software.ac.uk/resources/online-sustainability-evaluation)
* [ELIXIR FAIR training handbook](https://elixir-europe-training.github.io/ELIXIR-TrP-FAIR-training-handbook/)
* [Ten simple rules for making training materials FAIR](https://doi.org/10.1371/journal.pcbi.1007854)

