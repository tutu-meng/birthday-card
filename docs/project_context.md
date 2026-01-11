# Project Context

## Purpose
A digital birthday card for 布朗熊先生 (Mr. Brown Bear) from 可妮兔 (Cony Rabbit), themed as "爱的印象派·人生画展" (Impression of Love Exhibition).

## Design Concept

The card is designed as a virtual art exhibition VIP invitation, featuring:
- Monet-inspired impressionist artwork
- LINE Friends characters (Brown & Cony)
- Bilingual content (Chinese & English)
- Date: 1/26

## Card Layout

```mermaid
flowchart LR
    subgraph Closed
        A[Cover Front]
    end
    
    subgraph Open
        B[Inside Left] --- C[Inside Right]
    end
    
    subgraph Back
        D[Cover Back]
    end
    
    A -->|Open| B
    C -->|Flip| D
```

## Pages Description

### 1. Cover Front (`cover_front.PNG`)
- Museum gallery scene
- Title: 爱的印象派·人生画展 / Impression of Love Exhibition
- Subtitle: 致我最爱的布朗熊先生
- VIP badge with date 1/26 and "终身VIP荣誉馆长"

### 2. Inside Left (`inside_left.PNG`)
- Monet's Water Lilies & Japanese Bridge inspired scene
- Brown & Cony on the bridge
- Quote: "In every moment, a masterpiece of love."

### 3. Inside Right (`inside_right.PNG`)
- Birthday letter in Chinese
- Personal message from wife (Cony) to husband (Brown)

### 4. Cover Back (`cover_back.PNG`)
- Beach sunset impressionist scene
- Text: "Curated with Love." & "愿我们，日升月落都在一起。"
- Claude Monet signature style

## Technical Requirements

- 3D CSS transforms for card folding effect
- Responsive design (mobile-first)
- Smooth animations
- Google Fonts for typography
