﻿using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Entities.Constants;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos.RiskProfile
{
    public class RiskProfileDto : IEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public Guid ProjectId { get; set; }
        public RiskType Type { get; set; }
        public RiskSeverity Severity { get; set; }
        public RiskImpact Impact { get; set; }
        public ICollection<RemediationStep>? RemediationSteps { get; set; }
    }
}