# Article Tags Guide

This document defines the standard tags used across daniel-butler.com articles. Use these tags consistently to help readers filter and discover content.

## Core Principles

- **Keep tags broad and reusable** - "Python" not "Python Testing"
- **Limit to 3-5 tags per article** - Most relevant categories only
- **Use existing tags first** - Add new tags sparingly
- **Prefer technology/topic over format** - "AWS" not "Tutorial"

---

## Current Tags

### Programming Languages
- **Python** - Python code, libraries, or concepts
- **Rust** - Rust code, learning exercises, or Rust-specific patterns
- **JavaScript** - JS/TS code or web development (currently unused, reserved)

### Technologies & Platforms
- **AWS** - Amazon Web Services, cloud infrastructure, AWS-specific topics
- **CLI** - Command-line tools, terminal interfaces, shell scripts
- **Infrastructure** - System design, deployment, architecture patterns

### Concepts & Skills
- **Mental Models** - Frameworks for thinking about technical concepts
- **Performance** - Optimization, speed, efficiency, caching
- **Testing** - Test strategies, fixtures, TDD practices
- **Caching** - Cache strategies, TTL, invalidation patterns
- **Post-Mortem** - Incident analysis, outage breakdowns, retrospectives

### AI & Automation
- **AI** - LLMs, agent systems, AI workflows
- **Prompting** - Prompt engineering, AI interaction patterns
- **Claude Code** - Claude Code CLI, agentic workflows

### Work & Learning
- **Learning** - Educational content, exercises, study notes
- **Open Source** - OSS projects, public tools, libraries
- **Reading** - Reading lists, article collections
- **Resources** - Reference materials, curated links

---

## When to Add New Tags

**Good reasons:**
- Emerging topic with 3+ articles planned
- Technology/concept not covered by existing tags
- Clear category gap (e.g., "Security" if you write penetration testing posts)

**Bad reasons:**
- One-off article topic ("Raspberry Pi")
- Too specific ("Python Flask Testing")
- Audience-based ("For Accountants") - use different articles pages instead

---

## Examples

### ✅ Good Tagging
**Article: "Sheetmask released!"**
Tags: `Python, Open Source, CLI, Testing`
- Python (implementation language)
- Open Source (public GitHub project)
- CLI (command-line tool)
- Testing (test fixture generation)

**Article: "AWS Outage - Network Load Balancer Take"**
Tags: `AWS, Infrastructure, Post-Mortem`
- AWS (platform)
- Infrastructure (system design topic)
- Post-Mortem (incident analysis)

### ❌ Bad Tagging
**Article: "Sheetmask released!"**
Tags: `Python, Excel, Anonymization, LLM Integration, Testing, Open Source`
- Too many tags (6 instead of 3-5)
- Too specific ("Anonymization")
- Redundant with description ("LLM Integration")

---

## Tag Naming Conventions

- **Use Title Case** - "Mental Models" not "mental models"
- **Prefer singular** - "Infrastructure" not "Infrastructures" (exception: "Mental Models")
- **Spell out acronyms when unclear** - "Test-Driven Development" vs "TDD" (use whichever is more common)
- **Technology names match official branding** - "AWS" not "Amazon Web Services", "Claude Code" not "claude-code"

---

## Updating This Guide

When adding a new tag:
1. Add it to the appropriate category above
2. Write a 1-sentence description
3. Update examples if needed
4. Commit with message: `docs: add [TagName] tag to TAGS.md`

When retiring a tag:
1. Remove it from articles first
2. Remove from this guide
3. Document why in commit message

---

**Last updated:** 2026-02-23
