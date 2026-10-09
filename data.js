// Generated from data.json by build.py. Do not edit.
window.PROGRESS_DATA = {
  "schema_version": 1,
  "meta": {
    "title": "雙 AI 整合進度",
    "updated_at": "2026-10-09T05:12:41+00:00",
    "revision": "20261009-02",
    "snapshot_notice": "資料快照，非即時",
    "sync_status": "manual_snapshot",
    "sync_note": "由 Controller 核對來源後更新資料；尚未建立頁面自動同步。",
    "date_note": "核對日期代表證據被核對的時間，不代表任務開始或完成日。"
  },
  "projects": [
    {
      "id": "integration",
      "title": "雙 AI 工作環境整合",
      "status": "active",
      "summary": "四項同級成果分別準備；安全前置仍在 A 內。B／C 共用雲端模擬原型已完成、獨立核對中，正式工程仍未完成。",
      "evidence": {
        "level": "mixed",
        "source": "限定核證、唯讀盤點、04 版計畫與 Controller 最新交接"
      },
      "blockers": [
        "A 尚未正式放行，B／C 尚未完成工程，D 尚未整體驗收。"
      ],
      "next_steps": [
        "延續已授權安全前置，並準備四子計畫的後續工作。"
      ],
      "checked_at": "2026-10-09T05:12:41+00:00",
      "estimate_gap": "缺少實作批次、完整規模與等待時間，不計完成百分比。",
      "purpose": "讓共用規則、專案歸屬、技能來源與雙 AI 驗收都有清楚依據。",
      "workstreams": [
        {
          "id": "A",
          "title": "共用開場規則",
          "status": "hold",
          "summary": "四象限規則盤點已完成：155 條、44 條待裁、11 組重複；清理與正式落地尚未完成。",
          "evidence": {
            "level": "handoff",
            "source": "已核規則盤點與安全前置進度摘要（10/09）"
          },
          "blockers": [
            "44 條規則待裁，重複內容清理尚未完成。",
            "安全前置尚未正式掛載，正式 P／W02 尚未通過。"
          ],
          "next_steps": [
            "完成待裁規則與重複內容的清理。",
            "沿原安全門檻處理正式掛載及後續驗收。"
          ],
          "checked_at": "2026-10-09T05:11:22+00:00",
          "estimate_gap": "需先鎖定採用版本、批次與放行前提；不彙總候選工時。",
          "children": [
            {
              "id": "np",
              "title": "NP-PRH 安全前置",
              "status": "hold",
              "summary": "驗證器修補及獨立審查完成；64 案合成資料離線 SCOPE PASS 已收束。新工作階段準備已批准，待本人操作；W01 尚未掛載，正式 P／W02 尚未通過。",
              "evidence": {
                "level": "handoff",
                "source": "已核安全前置進度摘要（10/09）"
              },
              "blockers": [
                "已批准的準備待使用者本人回到電腦，在 Terminal 操作。",
                "W01 尚未掛載。",
                "正式 P／W02 尚未通過；離線限定範圍通過不等於正式驗收。",
                "既有限制仍保留。"
              ],
              "next_steps": [
                "本人回到電腦後執行已批准的準備批次。",
                "由既有執行線按原門檻完成 W01 掛載。",
                "取得正式執行結果後再處理 P／W02 驗收。"
              ],
              "checked_at": "2026-10-09T05:11:22+00:00",
              "estimate_gap": "離線驗證已收束；正式掛載與驗收時程未定。",
              "milestones": [
                {
                  "id": "gate2",
                  "title": "Gate 2 工具與復原檢查",
                  "status": "limited",
                  "summary": "59 項工具檢查 PASS；115 項復原檢查中 114 PASS，保留 F34 限制。",
                  "evidence": {
                    "level": "handoff",
                    "source": "Controller 已接受的交接摘要"
                  },
                  "blockers": [
                    "F34 限制仍在。"
                  ],
                  "next_steps": [
                    "後續依賴復原的操作沿既有界線處理。"
                  ],
                  "checked_at": "2026-10-08T05:30:33+00:00",
                  "estimate_gap": "此為已有結果；限制處理時間未知。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "gate3",
                  "title": "Gate 3 R3 靜態雙審",
                  "status": "accepted",
                  "summary": "雙審皆為 0 blocking、0 major，靜態結論已接受。",
                  "evidence": {
                    "level": "handoff",
                    "source": "Controller 已接受的交接摘要"
                  },
                  "blockers": [],
                  "next_steps": [
                    "沿用已接受靜態結論；正式執行另依原門檻。"
                  ],
                  "checked_at": "2026-10-08T05:30:33+00:00",
                  "estimate_gap": "審查已接受；不代表工程已完成。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "m5",
                  "title": "M5 準備",
                  "status": "reported",
                  "summary": "必要目錄準備由使用者回報已完成。",
                  "evidence": {
                    "level": "handoff",
                    "source": "使用者操作回報，由 Controller 轉交"
                  },
                  "blockers": [],
                  "next_steps": [
                    "後續按既有檢查確認適用性。"
                  ],
                  "checked_at": "2026-10-08T05:30:33+00:00",
                  "estimate_gap": "本頁未重做操作；無新增估時。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "m7m1",
                  "title": "M7／M1 限定核證",
                  "status": "verified",
                  "summary": "來源清單與準備觀察一致；限定核證完成，正式操作仍未放行。",
                  "evidence": {
                    "level": "local",
                    "source": "本機限定核證報告；檔案身分已核對"
                  },
                  "blockers": [
                    "僅支持準備範圍，不是整體 Gate PASS。"
                  ],
                  "next_steps": [
                    "後續仍須核對現況與取得對應批次授權。"
                  ],
                  "checked_at": "2026-10-08T06:49:51+00:00",
                  "estimate_gap": "下一批条件未齊；不推算完成時間。",
                  "observed_date": "2026-10-08",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [
                    {
                      "kind": "report",
                      "at": "2026-10-08",
                      "label": "限定結果回報日，非開工日",
                      "precision": "day",
                      "timezone": null,
                      "source": "本次限定結果交接；05 DT12"
                    }
                  ],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "m3s0",
                  "title": "M3 準備候選與 S0",
                  "status": "verified",
                  "summary": "M3 準備候選已核，S0 本次通過；正式操作尚未啟動。",
                  "evidence": {
                    "level": "handoff",
                    "source": "Controller 最新核證交接；本頁未另行重驗執行"
                  },
                  "blockers": [
                    "此為準備結果，不等於正式延期已生效或整體放行。"
                  ],
                  "next_steps": [
                    "由既有執行線核對準備結果，處理後續具體核准。"
                  ],
                  "checked_at": "2026-10-08T06:49:51+00:00",
                  "estimate_gap": "本項已有成功回報；後續正式操作時間未定。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [
                    {
                      "kind": "report",
                      "at": "2026-10-08",
                      "label": "限定結果回報日，非開工日",
                      "precision": "day",
                      "timezone": null,
                      "source": "本次限定結果交接；05 DT12"
                    }
                  ],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "preact",
                  "title": "PREACT dry-run",
                  "status": "done",
                  "summary": "本次 dry-run 完成，結果為 DRY_RUN_OK_NO_WRITE，原生退出碼 0。",
                  "evidence": {
                    "level": "handoff",
                    "source": "Ming 當次操作回報，由 Controller 轉交"
                  },
                  "blockers": [
                    "只完成本次 dry-run；正式延期仍未生效。"
                  ],
                  "next_steps": [
                    "由既有執行線處理正式操作的其餘前提與具體核准。"
                  ],
                  "checked_at": "2026-10-08T06:43:09+00:00",
                  "estimate_gap": "未提供實際開始時間或實工時；不能由完成時間反推。",
                  "actual_start": null,
                  "actual_end": "2026-10-08T14:29+08:00",
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": {
                      "label": "Ming 當次操作回報（Controller 轉交）",
                      "precision": "minute",
                      "timezone": "Asia/Taipei",
                      "verified_at": "2026-10-08T06:43:09+00:00"
                    }
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "np-verifier64",
                  "title": "64 案離線範圍驗證",
                  "status": "done",
                  "summary": "驗證器修補及獨立審查完成；64 案合成資料結果已獨立核對並收束，結論為 SCOPE PASS。",
                  "evidence": {
                    "level": "handoff",
                    "source": "已核進度摘要（10/09）"
                  },
                  "blockers": [
                    "僅代表離線合成資料的限定範圍通過；不能替代正式掛載及驗收。"
                  ],
                  "next_steps": [
                    "保留已接受結論，繼續依原門檻處理正式操作。"
                  ],
                  "checked_at": "2026-10-09T05:11:22+00:00",
                  "estimate_gap": "已核 12:45 收束時間；真正開始時間與實工時未知。",
                  "actual_start": null,
                  "actual_end": "2026-10-09T12:45+08:00",
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": {
                      "label": "已核離線驗證收束回報",
                      "precision": "minute",
                      "timezone": "Asia/Taipei",
                      "verified_at": "2026-10-09T05:11:22+00:00"
                    }
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [
                    {
                      "kind": "receipt",
                      "at": "2026-10-09T12:51+08:00",
                      "label": "主計畫登錄",
                      "precision": "minute",
                      "timezone": "Asia/Taipei",
                      "source": "已核進度摘要（10/09）"
                    }
                  ],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "np-session-prepare",
                  "title": "NP 新工作階段準備（C 批次）",
                  "status": "waiting",
                  "summary": "準備已批准；使用者目前不在電腦旁，待本人於 Terminal 執行。",
                  "evidence": {
                    "level": "handoff",
                    "source": "已核進度摘要（10/09）"
                  },
                  "blockers": [
                    "等待使用者本人可操作電腦。"
                  ],
                  "next_steps": [
                    "本人回到電腦後執行已批准的準備。"
                  ],
                  "checked_at": "2026-10-09T05:11:22+00:00",
                  "estimate_gap": "批准已取得；本人可操作時間未知，不新增批准等待或估算工時。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [
                    {
                      "kind": "report",
                      "at": "2026-10-09",
                      "label": "本次進度回報日",
                      "precision": "day",
                      "timezone": "Asia/Taipei",
                      "source": "已核進度摘要（10/09）"
                    }
                  ],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                },
                {
                  "id": "release",
                  "title": "正式掛載與下一批驗收",
                  "status": "hold",
                  "summary": "W01 尚未掛載；正式 P／W02 尚未通過。64 案離線 SCOPE PASS 不解除正式門檻。",
                  "evidence": {
                    "level": "handoff",
                    "source": "已核安全前置進度摘要（10/09）"
                  },
                  "blockers": [
                    "W01 尚未掛載，正式 P／W02 尚無通過結果。"
                  ],
                  "next_steps": [
                    "由既有執行線按原門檻完成掛載與正式驗收。"
                  ],
                  "checked_at": "2026-10-09T05:11:22+00:00",
                  "estimate_gap": "前提與等待時間未定，無開始／結束日期。",
                  "actual_start": null,
                  "actual_end": null,
                  "date_sources": {
                    "actual_start": null,
                    "actual_end": null
                  },
                  "calendar_span_days": null,
                  "actual_work_hours": null,
                  "work_hours_source": null,
                  "estimate_basis": null,
                  "date_events": [],
                  "machine_runtime_seconds": null,
                  "machine_runtime_source": null
                }
              ],
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            },
            {
              "id": "a-rule-inventory",
              "title": "四象限規則盤點",
              "status": "done",
              "summary": "155 條規則盤點完成；其中 44 條待裁、11 組重複，盤點完成不代表清理完成。",
              "evidence": {
                "level": "handoff",
                "source": "已核進度摘要（10/09）"
              },
              "blockers": [],
              "next_steps": [
                "逐項裁定並清理重複規則。"
              ],
              "checked_at": "2026-10-09T05:11:22+00:00",
              "estimate_gap": "未取得實際開始、結束與獨立計時資料；不推算工時或完成日期。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "report",
                  "at": "2026-10-09",
                  "label": "本次進度回報日",
                  "precision": "day",
                  "timezone": "Asia/Taipei",
                  "source": "已核進度摘要（10/09）"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            }
          ],
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        },
        {
          "id": "B",
          "title": "Codex 專案歸檔",
          "status": "preparing",
          "summary": "已有 56 項限定盤點與歷史資料；本輪歸檔工程尚未完成。共用雲端模擬原型完成、核對中，正式遷移另行驗收。",
          "evidence": {
            "level": "mixed",
            "source": "既有限定盤點與已核進度摘要（10/09）"
          },
          "blockers": [
            "首批來源、歸屬與目的地待確認。",
            "完整檔案清單、容量與活躍寫入者尚未核實。",
            "一處來源遭作業系統拒讀，保留盤點缺口。"
          ],
          "next_steps": [
            "先選首批範圍，補齊逐檔清單與保全需求。",
            "備份與回復方式具體化後再送批次核准。"
          ],
          "checked_at": "2026-10-09T05:12:41+00:00",
          "estimate_gap": "僅有 56 項頂層盤點，並非完整容量；批數與實作估時未知。",
          "facts": [
            "56 項頂層已盤點",
            "本輪正式歸檔工程未完成",
            "雲端模擬不代表正式遷移"
          ],
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null,
          "children": [
            {
              "id": "b-inventory",
              "title": "B 限定盤點（56 項）",
              "status": "done",
              "summary": "限定頂層盤點已交付；日期證據只到 UTC 觀察日，完整工程仍未完成。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT10／限定盤點報告"
              },
              "blockers": [],
              "next_steps": [
                "補齊正式批次的完整清單與歸屬。"
              ],
              "checked_at": "2026-10-08T06:49:51+00:00",
              "estimate_gap": "只有觀察日，真正開始與交付鐘點未提供。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "observation",
                  "at": "2026-10-08",
                  "label": "UTC 觀察日",
                  "precision": "day",
                  "timezone": "UTC",
                  "source": "限定盤點正文；05 DT10"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            }
          ]
        },
        {
          "id": "C",
          "title": "skills 共用",
          "status": "preparing",
          "summary": "已有 24 份技能主文件盤點與部分共用入口的歷史資料；本輪完整技能共用工程尚未完成。共用雲端模擬原型完成、核對中，正式工程另行驗收。",
          "evidence": {
            "level": "mixed",
            "source": "既有限定盤點與已核進度摘要（10/09）"
          },
          "blockers": [
            "完整附件與相依尚未全部核實。",
            "共用、單一平台適用及歸屬待逐項裁定。",
            "已有入口不能證明兩個平台均已成功載入。"
          ],
          "next_steps": [
            "確認每項技能的主來源、適用平台與完整附件。",
            "按具體批次安排入口與載入驗收。"
          ],
          "checked_at": "2026-10-09T05:12:41+00:00",
          "estimate_gap": "24 份主文件不等於 24 個完整套件；附件規模與驗收批數未知。",
          "facts": [
            "24 份主文件已讀",
            "已有部分共用入口的歷史資料",
            "本輪技能共用工程未完成"
          ],
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null,
          "children": [
            {
              "id": "c-inventory",
              "title": "C 主文件盤點（24 份）",
              "status": "done",
              "summary": "24 份技能主文件盤點已交付；完整附件、平台驗收與共用工程尚未完成。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT10／限定盤點報告"
              },
              "blockers": [],
              "next_steps": [
                "逐批核對完整附件及平台契約。"
              ],
              "checked_at": "2026-10-08T06:49:51+00:00",
              "estimate_gap": "只有觀察日，真正开始與交付鐘點未提供。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "observation",
                  "at": "2026-10-08",
                  "label": "UTC 觀察日",
                  "precision": "day",
                  "timezone": "UTC",
                  "source": "限定盤點正文；05 DT10"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            }
          ]
        },
        {
          "id": "D",
          "title": "整體驗收",
          "status": "waiting",
          "summary": "總計畫與四子計畫 04 版文書審查完成；A／B／C 本輪正式工程尚未完成，整體驗收也未完成。",
          "evidence": {
            "level": "handoff",
            "source": "已核整體進度摘要（10/09）"
          },
          "blockers": [
            "A／B／C 尚未提供同版正式交付。",
            "各平台實際行為與範圍排除仍須明確記錄。"
          ],
          "next_steps": [
            "可先建立範圍、平台、場景與證據矩陣。",
            "取得 A／B／C 固定交付後逐項驗收。"
          ],
          "checked_at": "2026-10-09T05:11:22+00:00",
          "estimate_gap": "實際範圍、平台與場景組未定；無整體完成日期。",
          "facts": [
            "04 版計畫文書已審",
            "整體驗收未完成"
          ],
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        }
      ],
      "shared_actions": [
        {
          "id": "plans",
          "title": "總計畫＋四子計畫",
          "status": "done",
          "summary": "總計畫與四子計畫 04 版文書審查完成；這是共同行動，不代表 A／B／C／D 實作完成。",
          "evidence": {
            "level": "handoff",
            "source": "Controller 最新交付核對：回條與十份主檔一致"
          },
          "blockers": [],
          "next_steps": [
            "依已完成計畫準備各項具體工程批次；四項實作成果尚未完成。"
          ],
          "checked_at": "2026-10-09T05:11:22+00:00",
          "estimate_gap": "本次規劃文書已完成；工程工期另依各項實際批次確認。",
          "observed_date": "2026-10-08",
          "actual_start": null,
          "actual_end": "2026-10-08",
          "date_sources": {
            "actual_start": null,
            "actual_end": {
              "label": "CC 04 增量核對回條，F1／F2／F3 閉合；05 DT11",
              "precision": "day",
              "timezone": null,
              "verified_at": "2026-10-08T06:49:51+00:00"
            }
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null,
          "children": [
            {
              "id": "plan05",
              "title": "05 全項計畫提案",
              "status": "draft",
              "summary": "05 新增範圍與工作包仍是未審提案；既有 04 審查完成狀態保留。",
              "evidence": {
                "level": "local",
                "source": "05 文書提案及日期證據表"
              },
              "blockers": [],
              "next_steps": [
                "由既有主持線核定新增範圍；不據此執行工程。"
              ],
              "checked_at": "2026-10-08T06:49:51+00:00",
              "estimate_gap": "尚未審查或核定新增範圍，不能承諾工程工期。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            }
          ]
        },
        {
          "id": "review",
          "title": "cross-review",
          "status": "done",
          "summary": "04 版計畫文書審查已完成，既有三項問題已閉合；工程實作與整體驗收仍分項處理。",
          "evidence": {
            "level": "handoff",
            "source": "CC 審查閉合與 Controller 交付核對回報"
          },
          "blockers": [],
          "next_steps": [
            "保留審查與閉合紀錄，後續工程仍按各項批次執行。"
          ],
          "checked_at": "2026-10-09T05:11:22+00:00",
          "estimate_gap": "本次計畫審查已完成；不追加 r2 日程。",
          "actual_start": null,
          "actual_end": "2026-10-08",
          "date_sources": {
            "actual_start": null,
            "actual_end": {
              "label": "CC 04 增量核對回條，F1／F2／F3 閉合；05 DT11",
              "precision": "day",
              "timezone": null,
              "verified_at": "2026-10-08T06:49:51+00:00"
            }
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        }
      ],
      "history": [
        {
          "id": "h1",
          "title": "歷史① 單一 home",
          "status": "reported",
          "summary": "使用者回報已完成，承接現況。",
          "evidence": {
            "level": "user",
            "source": "使用者明示回報"
          },
          "blockers": [],
          "next_steps": [
            "保留歷史里程碑，不重做遷移。"
          ],
          "checked_at": "2026-10-08T06:49:51+00:00",
          "estimate_gap": "完成日期未提供；不補填。",
          "observed_date": null,
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        },
        {
          "id": "h2",
          "title": "歷史② 改名",
          "status": "reported",
          "summary": "使用者回報已完成，承接現況。",
          "evidence": {
            "level": "user",
            "source": "使用者明示回報"
          },
          "blockers": [],
          "next_steps": [
            "保留歷史里程碑，不重做改名。"
          ],
          "checked_at": "2026-10-08T06:49:51+00:00",
          "estimate_gap": "完成日期未提供；不補填。",
          "observed_date": null,
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null,
          "children": [
            {
              "id": "h2-6a",
              "title": "②6a 服務恢復確認",
              "status": "done",
              "summary": "服務恢復 PASS；已知回條時間，操作真正起訖未核。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT04／服務恢復回條"
              },
              "blockers": [],
              "next_steps": [
                "保留既有完成結果，不重做服務恢復。"
              ],
              "checked_at": "2026-10-08T06:49:51+00:00",
              "estimate_gap": "回條時刻不是 runner 結束時刻；實工時未知。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "receipt",
                  "at": "2026-09-29T16:45+08:00",
                  "label": "服務恢復 PASS 回條",
                  "precision": "minute",
                  "timezone": "Asia/Taipei",
                  "source": "服務恢復回條；05 DT04"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            },
            {
              "id": "h2-v5-run",
              "title": "②自然晨報執行",
              "status": "done",
              "summary": "自然執行起訖已知；4 分 17 秒僅為機器執行時間。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT05／自然執行紀錄"
              },
              "blockers": [],
              "next_steps": [
                "保留自然執行結果，不以重跑替代。"
              ],
              "checked_at": "2026-10-08T06:49:51+00:00",
              "estimate_gap": "未提供人工／agent 主動工時；機器時間不能當整案工時。",
              "actual_start": "2026-09-30T06:30:04+08:00",
              "actual_end": "2026-09-30T06:34:21+08:00",
              "date_sources": {
                "actual_start": {
                  "label": "自然執行紀錄起點；05 DT05",
                  "precision": "second",
                  "timezone": "Asia/Taipei",
                  "verified_at": "2026-10-08T06:49:51+00:00"
                },
                "actual_end": {
                  "label": "自然執行紀錄終點；05 DT05",
                  "precision": "second",
                  "timezone": "Asia/Taipei",
                  "verified_at": "2026-10-08T06:49:51+00:00"
                }
              },
              "calendar_span_days": 1,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": "只可作同類機器執行的單次樣本；尚缺同版規模與多批資料，不用於整案或人力估期。",
              "date_events": [],
              "machine_runtime_seconds": 257,
              "machine_runtime_source": "自然執行紀錄起訖；05 DT05；非人工或 agent 實工時"
            },
            {
              "id": "h2-v5-pass",
              "title": "②V5／6b PASS 判定",
              "status": "done",
              "summary": "本次判定 PASS 的事件時刻已核，查核開始時間未知。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT06／V5 回條"
              },
              "blockers": [],
              "next_steps": [
                "保留已核判定，不重做主體。"
              ],
              "checked_at": "2026-10-08T06:49:51+00:00",
              "estimate_gap": "開始及主動工時未知；跨夜等待不算工作量。",
              "actual_start": null,
              "actual_end": "2026-09-30T07:00:46+08:00",
              "date_sources": {
                "actual_start": null,
                "actual_end": {
                  "label": "V5 回條中的 PASS 判定事件；05 DT06",
                  "precision": "second",
                  "timezone": "Asia/Taipei",
                  "verified_at": "2026-10-08T06:49:51+00:00"
                }
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            },
            {
              "id": "h2-confirm-notice",
              "title": "②CC 確認／五線通告",
              "status": "done",
              "summary": "截至紀錄時間，確認與通告已記為完成；不是各次發送的精確時刻，也不等於五線全部改完。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT07／步7 checkpoint"
              },
              "blockers": [],
              "next_steps": [
                "保留確認與通告紀錄；各線完成回報另核。"
              ],
              "checked_at": "2026-10-08T06:49:51+00:00",
              "estimate_gap": "只有完成紀錄上限，不能算各操作起訖或實工時。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "completed_by",
                  "at": "2026-09-30T07:25+08:00",
                  "label": "截至此紀錄已完成",
                  "precision": "minute",
                  "timezone": "Asia/Taipei",
                  "source": "步7 checkpoint；05 DT07；紀錄上限"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            },
            {
              "id": "h2-step8-inventory",
              "title": "②步8 Codex 限定盤點交付",
              "status": "done",
              "summary": "限定盤點已交付；真正開始時間未知，不能把快照時間當作開工。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT09／限定盤點交付紀錄"
              },
              "blockers": [],
              "next_steps": [
                "交原負責線整合後續事項；不視為步8整體完成。"
              ],
              "checked_at": "2026-10-08T06:49:51+00:00",
              "estimate_gap": "快照至落檔僅為紀錄間隔，不能算整趟耗時。",
              "actual_start": null,
              "actual_end": "2026-10-08T06:29:58.462356+00:00",
              "date_sources": {
                "actual_start": null,
                "actual_end": {
                  "label": "限定盤點交付紀錄；05 DT09",
                  "precision": "microsecond",
                  "timezone": "UTC",
                  "verified_at": "2026-10-08T06:49:51+00:00"
                }
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "snapshot",
                  "at": "2026-10-08T06:24:29+00:00",
                  "label": "盤點快照，非工作開始",
                  "precision": "second",
                  "timezone": "UTC",
                  "source": "限定盤點快照；05 DT09"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            },
            {
              "id": "h2-step8-review",
              "title": "②步8 最早評估",
              "status": "waiting",
              "summary": "最早 10/13 起才可評估；仍須前提齊備及另行授權，不是必刪日，也不會到期自動執行。",
              "evidence": {
                "level": "local",
                "source": "05 日期證據表（已核歷史來源摘要） DT15／既有觀察門檻"
              },
              "blockers": [],
              "next_steps": [
                "到最早評估點後，核對觀察證據與其餘前提。"
              ],
              "checked_at": "2026-10-09T05:11:22+00:00",
              "estimate_gap": "14 日是觀察門檻，不是人工工作量；主動工時待核。",
              "actual_start": null,
              "actual_end": null,
              "date_sources": {
                "actual_start": null,
                "actual_end": null
              },
              "calendar_span_days": null,
              "actual_work_hours": null,
              "work_hours_source": null,
              "estimate_basis": null,
              "date_events": [
                {
                  "kind": "not_before",
                  "at": "2026-10-13",
                  "label": "最早可評估日",
                  "precision": "day",
                  "timezone": "Asia/Taipei",
                  "source": "既有步8觀察門檻；05 DT15"
                }
              ],
              "machine_runtime_seconds": null,
              "machine_runtime_source": null
            }
          ]
        }
      ],
      "actual_start": null,
      "actual_end": null,
      "date_sources": {
        "actual_start": null,
        "actual_end": null
      },
      "calendar_span_days": null,
      "actual_work_hours": null,
      "work_hours_source": null,
      "estimate_basis": null,
      "date_events": [],
      "machine_runtime_seconds": null,
      "machine_runtime_source": null,
      "children": [
        {
          "id": "bc-cloud-simulation",
          "title": "專案歸檔／技能共用雲端模擬",
          "status": "active",
          "summary": "雲端模擬原型已完成，已回報 27 項測試通過，獨立核對仍進行中；不動工作機原檔，也不構成正式 B／C 遷移或完工。",
          "evidence": {
            "level": "handoff",
            "source": "已核進度摘要（10/09）"
          },
          "blockers": [
            "獨立核對尚未完成。"
          ],
          "next_steps": [
            "由負責執行線完成獨立核對並回報限制；正式遷移另依原門檻。"
          ],
          "checked_at": "2026-10-09T05:12:41+00:00",
          "estimate_gap": "原型完成回報未提供精確起訖與實工時；獨立核對完成時間待定。",
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [
            {
              "kind": "report",
              "at": "2026-10-09",
              "label": "原型完成／27 項測試通過回報；獨立核對中",
              "precision": "day",
              "timezone": "Asia/Taipei",
              "source": "已核進度摘要（10/09）"
            }
          ],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        }
      ]
    },
    {
      "id": "documents",
      "title": "計畫文件整理",
      "status": "active",
      "summary": "計畫目錄已由 69 項整理為 28 項，保留 5 份固定主檔＋1 份 CC 活動檔；必要長期資料保全已完成。21 項分類統計保留為 10/08 基準。",
      "evidence": {
        "level": "handoff",
        "source": "已核文件整理與保全進度摘要（10/09）"
      },
      "blockers": [
        "10/08 分類基準中的個別不確定事項，本次未取得逐項重判結果。"
      ],
      "next_steps": [
        "維持固定主檔與活動檔的分工；後續變更逐項核對。"
      ],
      "checked_at": "2026-10-09T05:11:22+00:00",
      "estimate_gap": "目錄整併與必要保全已完成；未取得可換算實工時的起訖紀錄。",
      "purpose": "看清每份計畫在做什麼、做到哪裡，以及該放在哪裡。",
      "categories": [
        {
          "title": "目的",
          "description": "文件要解決的問題與涵蓋範圍。"
        },
        {
          "title": "已做＋證據",
          "description": "已交付內容與支持它的來源。"
        },
        {
          "title": "未做",
          "description": "尚未執行、未驗證與待決事項。"
        },
        {
          "title": "建議位置",
          "description": "依用途提出位置建議，不直接搬檔。"
        },
        {
          "title": "不確定",
          "description": "來源不足、矛盾與待查證的地方。"
        }
      ],
      "counts": {
        "total": 21,
        "done": 4,
        "active": 10,
        "todo": 6,
        "uncertain": 1
      },
      "children": [
        {
          "id": "preservation",
          "title": "必要長期資料保全",
          "status": "done",
          "summary": "必要長期資料保全已完成；完成保全不代表 A／B／C／D 工程已完成。",
          "evidence": {
            "level": "handoff",
            "source": "已核必要保全完成回報（10/09）"
          },
          "blockers": [],
          "next_steps": [
            "維持已保全資料及後續異動紀錄。"
          ],
          "checked_at": "2026-10-09T05:11:22+00:00",
          "estimate_gap": "完成狀態已回報，精確作業起訖與實工時未提供。",
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [
            {
              "kind": "report",
              "at": "2026-10-09",
              "label": "必要保全完成回報",
              "precision": "day",
              "timezone": "Asia/Taipei",
              "source": "已核進度摘要（10/09）"
            }
          ],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        },
        {
          "id": "docs-consolidation",
          "title": "計畫目錄整併",
          "status": "done",
          "summary": "目錄總項目由 69 減至 28；本批由 47 減至 6，保留 5 份固定主檔＋1 份 CC 活動檔。106 個連結已核對可達，32 項移入保存區，14 項放入可回復垃圾區。",
          "evidence": {
            "level": "handoff",
            "source": "Controller 已核計畫目錄整併完成回報"
          },
          "blockers": [],
          "next_steps": [
            "維持固定主檔、活動檔與索引連結。"
          ],
          "checked_at": "2026-10-09T05:11:22+00:00",
          "estimate_gap": "未取得作業起訖與實工時；完成回報不能換算工期。",
          "actual_start": null,
          "actual_end": null,
          "date_sources": {
            "actual_start": null,
            "actual_end": null
          },
          "calendar_span_days": null,
          "actual_work_hours": null,
          "work_hours_source": null,
          "estimate_basis": null,
          "date_events": [
            {
              "kind": "report",
              "at": "2026-10-08",
              "label": "已完成整併回報",
              "precision": "day",
              "timezone": null,
              "source": "Controller 已核計畫目錄整併完成回報"
            }
          ],
          "machine_runtime_seconds": null,
          "machine_runtime_source": null
        }
      ],
      "actual_start": null,
      "actual_end": null,
      "date_sources": {
        "actual_start": null,
        "actual_end": null
      },
      "calendar_span_days": null,
      "actual_work_hours": null,
      "work_hours_source": null,
      "estimate_basis": null,
      "date_events": [],
      "machine_runtime_seconds": null,
      "machine_runtime_source": null
    }
  ],
  "gantt": {
    "mode": "relative_phases",
    "date_note": "未來日期待排；相對階段不是工期。",
    "integration": {
      "phases": [
        "範圍準備",
        "批次核准",
        "實作／複製",
        "切換／交付",
        "整體驗收",
        "完成裁決"
      ],
      "rows": [
        {
          "id": "ga",
          "kind": "group",
          "title": "A 共用開場規則",
          "note": "155 條已盤點；清理未完"
        },
        {
          "id": "a-plan",
          "kind": "task",
          "title": "規則與批次準備",
          "source_id": "A",
          "phase": 0,
          "phase_end": 1,
          "status": "preparing",
          "deps": [],
          "note": "44 待裁／11 重複",
          "summary": "規則盤點完成，待裁及重複內容清理尚未完成。",
          "next_step": "完成逐項裁定與清理，再固定實作批次。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "a-rule-inventory-fact",
          "kind": "task",
          "title": "四象限規則盤點",
          "source_id": "a-rule-inventory",
          "timing_source_id": "a-rule-inventory",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "155 條；清理另行",
          "summary": "",
          "next_step": "",
          "nested": false
        },
        {
          "id": "np-evidence",
          "kind": "task",
          "title": "NP 準備核證",
          "source_id": "m7m1",
          "phase": 0,
          "phase_end": 0,
          "status": "verified",
          "deps": [],
          "note": "M7／M1 已核",
          "summary": "",
          "next_step": "",
          "nested": true,
          "timing_source_id": "m7m1"
        },
        {
          "id": "np-m3",
          "kind": "task",
          "title": "NP 準備候選",
          "source_id": "m3s0",
          "phase": 1,
          "phase_end": 1,
          "status": "verified",
          "deps": [
            "np-evidence"
          ],
          "note": "M3／S0 本次通過",
          "summary": "",
          "next_step": "",
          "nested": true,
          "timing_source_id": "m3s0"
        },
        {
          "id": "np-preact",
          "kind": "task",
          "title": "NP PREACT dry-run",
          "source_id": "preact",
          "timing_source_id": "preact",
          "phase": 2,
          "phase_end": 2,
          "status": "done",
          "deps": [
            "np-m3"
          ],
          "note": "10/08 14:29 完成",
          "summary": "本次 dry-run 成功且無寫入；正式延期仍未生效。",
          "next_step": "等待原負責線處理正式操作的其餘前提。",
          "nested": true
        },
        {
          "id": "np-verifier64-fact",
          "kind": "task",
          "title": "64 案離線範圍驗證",
          "source_id": "np-verifier64",
          "timing_source_id": "np-verifier64",
          "phase": 2,
          "phase_end": 2,
          "status": "done",
          "deps": [],
          "note": "10/09 12:45 SCOPE PASS",
          "summary": "",
          "next_step": "",
          "nested": true
        },
        {
          "id": "np-session-prepare-row",
          "kind": "task",
          "title": "NP 新工作階段準備",
          "source_id": "np-session-prepare",
          "timing_source_id": "np-session-prepare",
          "phase": 2,
          "phase_end": 2,
          "status": "waiting",
          "deps": [],
          "note": "已批准；待本人 Terminal",
          "summary": "",
          "next_step": "",
          "nested": true
        },
        {
          "id": "np-release",
          "kind": "task",
          "title": "NP 正式掛載與驗收",
          "source_id": "release",
          "phase": 2,
          "phase_end": 2,
          "status": "hold",
          "deps": [
            "np-m3"
          ],
          "note": "W01 未掛載；P／W02 未過",
          "summary": "離線限定驗證通過；正式掛載與驗收仍未完成。",
          "next_step": "依原門檻完成 W01 掛載及正式驗收。",
          "nested": true,
          "timing_source_id": null
        },
        {
          "id": "a-implement",
          "kind": "task",
          "title": "規則實作與隔離驗證",
          "source_id": "A",
          "phase": 2,
          "phase_end": 2,
          "status": "waiting",
          "deps": [
            "a-plan"
          ],
          "note": "待批次核准",
          "summary": "在核准範圍完成規則實作與隔離驗證，尚未執行。",
          "next_step": "先完成規則與批次準備，再按核准範圍實作。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "a-switch",
          "kind": "task",
          "title": "正式切換與交付",
          "source_id": "A",
          "phase": 3,
          "phase_end": 3,
          "status": "waiting",
          "deps": [
            "np-release",
            "a-implement"
          ],
          "note": "等安全前置＋實作",
          "summary": "規則實作與安全前置齊備後，才可正式切換並交驗。",
          "next_step": "等待兩項前置與原負責線放行。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "gb",
          "kind": "group",
          "title": "B Codex 專案歸檔",
          "note": "盤點已交；本輪工程未完"
        },
        {
          "id": "b-inventory-fact",
          "kind": "task",
          "title": "限定盤點（56 項）",
          "source_id": "b-inventory",
          "timing_source_id": "b-inventory",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "10/08 UTC 觀察",
          "summary": "",
          "next_step": "",
          "nested": false
        },
        {
          "id": "b-plan",
          "kind": "task",
          "title": "盤點與批次準備",
          "source_id": "B",
          "phase": 0,
          "phase_end": 1,
          "status": "preparing",
          "deps": [],
          "note": "歸屬／完整清單待補",
          "summary": "已有限定頂層盤點，完整清單、來源歸屬與批次方案待完成。",
          "next_step": "選首批範圍，補齊完整清單及遷移方案。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "bc-cloud-simulation-row",
          "kind": "task",
          "title": "B／C 雲端模擬",
          "source_id": "bc-cloud-simulation",
          "timing_source_id": "bc-cloud-simulation",
          "phase": 0,
          "phase_end": 0,
          "status": "active",
          "deps": [],
          "note": "原型完成；27 項通過，核對中",
          "summary": "",
          "next_step": "",
          "nested": false
        },
        {
          "id": "b-copy",
          "kind": "task",
          "title": "複製與核對",
          "source_id": "B",
          "phase": 2,
          "phase_end": 2,
          "status": "waiting",
          "deps": [
            "b-plan"
          ],
          "note": "未複製",
          "summary": "批次核准後複製並核對完整性；目前尚未執行。",
          "next_step": "先完成並核准具體批次。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "b-deliver",
          "kind": "task",
          "title": "切換與交付",
          "source_id": "B",
          "phase": 3,
          "phase_end": 3,
          "status": "waiting",
          "deps": [
            "b-copy"
          ],
          "note": "未切換",
          "summary": "複製核對完成後，依已核範圍切換、驗證並交付。",
          "next_step": "等待複製核對完成及個別切換核准。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "gc",
          "kind": "group",
          "title": "C skills 共用",
          "note": "盤點及歷史資料已有；工程未完"
        },
        {
          "id": "c-inventory-fact",
          "kind": "task",
          "title": "主文件盤點（24 份）",
          "source_id": "c-inventory",
          "timing_source_id": "c-inventory",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "10/08 UTC 觀察",
          "summary": "",
          "next_step": "",
          "nested": false
        },
        {
          "id": "c-plan",
          "kind": "task",
          "title": "技能與批次準備",
          "source_id": "C",
          "phase": 0,
          "phase_end": 1,
          "status": "preparing",
          "deps": [],
          "note": "平台／完整附件待核",
          "summary": "主文件盤點已完成；完整附件、平台適用性與正式批次仍待核對。",
          "next_step": "選首批技能，固定完整附件及平台契約。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "c-build",
          "kind": "task",
          "title": "建立完整套件",
          "source_id": "C",
          "phase": 2,
          "phase_end": 2,
          "status": "waiting",
          "deps": [
            "c-plan"
          ],
          "note": "尚未實作",
          "summary": "設計與批次獲准後建立完整套件；目前未執行。",
          "next_step": "先完成套件設計與具體批次核准。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "c-deliver",
          "kind": "task",
          "title": "入口驗收與交付",
          "source_id": "C",
          "phase": 3,
          "phase_end": 3,
          "status": "waiting",
          "deps": [
            "c-build"
          ],
          "note": "尚未載入驗收",
          "summary": "套件建立完成後，逐平台驗證入口、載入及適用行為。",
          "next_step": "等待套件核對完成，再於核准窗口驗收。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "gd",
          "kind": "group",
          "title": "D 整體驗收",
          "note": "正式驗收尚未開始"
        },
        {
          "id": "d-plan",
          "kind": "task",
          "title": "驗收準備",
          "source_id": "D",
          "phase": 0,
          "phase_end": 1,
          "status": "preparing",
          "deps": [],
          "note": "04 文書已審；工程未驗",
          "summary": "04 版計畫文書審查完成；正式工程交付與整體驗收尚未完成。",
          "next_step": "先完成範圍與驗收場景的對照。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "d-test",
          "kind": "task",
          "title": "整體驗收",
          "source_id": "D",
          "phase": 4,
          "phase_end": 4,
          "status": "waiting",
          "deps": [
            "a-switch",
            "b-deliver",
            "c-deliver",
            "d-plan"
          ],
          "note": "等 A／B／C 同版交付",
          "summary": "對同版 A／B／C 交付進行必要驗收，不重複計算已共用的分項證據。",
          "next_step": "取得各項固定交付及相應測試核准。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "d-decision",
          "kind": "task",
          "title": "完成裁決",
          "source_id": "D",
          "phase": 5,
          "phase_end": 5,
          "status": "waiting",
          "deps": [
            "d-test"
          ],
          "note": "尚無整體 PASS",
          "summary": "驗收證據齊備後，彙整未完成事項、限制與完成裁決。",
          "next_step": "等待整體驗收與殘留事項處置。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "gg",
          "kind": "group",
          "title": "共同計畫與審查",
          "note": "04 文書審完成；非工程完工"
        },
        {
          "id": "g-review",
          "kind": "task",
          "title": "03 版交叉審查",
          "source_id": "review",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "10/08 核定；3 項閉合",
          "summary": "",
          "next_step": "",
          "nested": false,
          "timing_source_id": "review"
        },
        {
          "id": "g-revise",
          "kind": "task",
          "title": "04 版文字修訂",
          "source_id": "plans",
          "phase": 1,
          "phase_end": 1,
          "status": "done",
          "deps": [
            "g-review"
          ],
          "note": "10/08 完成；不需 r2",
          "summary": "",
          "next_step": "",
          "nested": false,
          "timing_source_id": "plans"
        },
        {
          "id": "g-proposal05",
          "kind": "task",
          "title": "05 全項計畫提案",
          "source_id": "plan05",
          "timing_source_id": "plan05",
          "phase": 1,
          "phase_end": 1,
          "status": "draft",
          "deps": [],
          "note": "提案；尚未審查",
          "summary": "",
          "next_step": "",
          "nested": false
        }
      ]
    },
    "documents": {
      "phases": [
        "分類報告",
        "人工審閱",
        "位置調整"
      ],
      "rows": [
        {
          "id": "docs-report",
          "kind": "task",
          "title": "分類報告",
          "source_id": "documents",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "10/08 分類基準：21 項",
          "summary": "限定分類報告已交付；此報告本身為唯讀，後續目錄整併另列。",
          "next_step": "後續變更逐項核對。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "docs-review",
          "kind": "task",
          "title": "人工審閱",
          "source_id": "documents",
          "phase": 1,
          "phase_end": 1,
          "status": "waiting",
          "deps": [
            "docs-report"
          ],
          "note": "10/08 基準；本次未重判",
          "summary": "保留歷史分類中的不確定事項；本次未取得逐項重判結果。",
          "next_step": "逐項核對不確定清單與處置。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "docs-arrange",
          "kind": "task",
          "title": "其餘位置裁定",
          "source_id": "documents",
          "phase": 2,
          "phase_end": 2,
          "status": "waiting",
          "deps": [
            "docs-review"
          ],
          "note": "剩餘事項待個別裁定",
          "summary": "計畫目錄整併已完成；其餘文件是否調整位置仍待個別裁定。",
          "next_step": "先完成審閱與個別裁定，保留在途文件。",
          "nested": false,
          "timing_source_id": null
        },
        {
          "id": "docs-preserve",
          "kind": "task",
          "title": "必要長期資料保全",
          "source_id": "preservation",
          "timing_source_id": "preservation",
          "phase": 0,
          "phase_end": 0,
          "status": "done",
          "deps": [],
          "note": "必要保全已完成",
          "summary": "",
          "next_step": "",
          "nested": false
        },
        {
          "id": "docs-consolidation-row",
          "kind": "task",
          "title": "計畫目錄整併",
          "source_id": "docs-consolidation",
          "timing_source_id": "docs-consolidation",
          "phase": 2,
          "phase_end": 2,
          "status": "done",
          "deps": [],
          "note": "69 → 28；5 固定＋1 活動",
          "summary": "",
          "next_step": "",
          "nested": false
        }
      ]
    },
    "actual_rows": [
      {
        "source_id": "h1",
        "title": "①主體完成"
      },
      {
        "source_id": "h2",
        "title": "②主體完成"
      },
      {
        "source_id": "h2-6a",
        "title": "②6a 服務恢復確認"
      },
      {
        "source_id": "h2-v5-run",
        "title": "②自然晨報執行"
      },
      {
        "source_id": "h2-v5-pass",
        "title": "②V5／6b PASS 判定"
      },
      {
        "source_id": "h2-confirm-notice",
        "title": "②CC 確認／五線通告"
      },
      {
        "source_id": "h2-step8-inventory",
        "title": "②步8 限定盤點交付"
      },
      {
        "source_id": "h2-step8-review",
        "title": "②步8 最早評估"
      },
      {
        "source_id": "m7m1",
        "title": "NP M7／M1 限定核證"
      },
      {
        "source_id": "m3s0",
        "title": "NP M3／S0 限定結果"
      },
      {
        "source_id": "preact",
        "title": "NP PREACT dry-run"
      },
      {
        "source_id": "b-inventory",
        "title": "B 限定盤點"
      },
      {
        "source_id": "c-inventory",
        "title": "C 主文件盤點"
      },
      {
        "source_id": "review",
        "title": "03 審查／04 增量核"
      },
      {
        "source_id": "plans",
        "title": "04 計畫文書"
      },
      {
        "source_id": "docs-consolidation",
        "title": "計畫目錄整併"
      },
      {
        "source_id": "a-rule-inventory",
        "title": "A 四象限規則盤點"
      },
      {
        "source_id": "np-verifier64",
        "title": "64 案離線範圍驗證"
      },
      {
        "source_id": "np-session-prepare",
        "title": "NP 新工作階段準備"
      },
      {
        "source_id": "bc-cloud-simulation",
        "title": "B／C 雲端模擬"
      },
      {
        "source_id": "preservation",
        "title": "必要長期資料保全"
      }
    ]
  }
};
